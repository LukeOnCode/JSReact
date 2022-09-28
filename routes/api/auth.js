const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult } = require('express-validator');
const {readFromFile} = require('../../utils/object_utils')

// @route  GET api/auth
// @desc   AUTH router for token 
// @access public
router.get('/', auth, (req, res) => {
    try {
        console.log(req.user)
        res.json(req.user)
    } catch (error) {
        console.log(error);
    }
})

// @route  POST api/auth
// @desc   AUTH router with login
// @access public
router.post(
    '/',
    [
        check('email', 'Please insert email').isEmail(),
        check('password', 'Please enter password').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        let users = await readFromFile();
       
        function match(obj, value) {
            const user = Object.keys(obj).find(key => obj[key]['email'] === value) 
            return user
        }
        
        try {
            for (const key in users.users) {
                const prop = users.users[key];
                if(req.body.email === prop.email){
                    let user = match(users.users, req.body.email)
                    let pwd_ok = await bcrypt.compare(req.body.password, users.users[user].pwd)
                    
                    if(!pwd_ok){
                        res.status(400).json({ msg: "wrong credentials" })
                    }
                    const payload = {
                        user: {
                            id: users.users[user].id,
                            email: users.users[user].email,
                            name: users.users[user].name,
                            date: users.users[user].date,
                            avatar: users.users[user].avatar
                        }
                    }
                    jwt.sign(
                        payload,
                        config.get('jwtSecret'),
                        { expiresIn: 360000 },
                        ( err, token ) => {
                            if(err) throw err;
                            res.json({ token })
                        }
                    );
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
)


module.exports = router;
