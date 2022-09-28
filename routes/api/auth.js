const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { v4: uuidv4 } = require('uuid');
const {check, validationResult } = require('express-validator');
const {readFromFile} = require('../../utils/object_utils')

// @route  GET api/auth
// @desc   AUTH router for token 
// @access public
router.get('/', auth, (req, res) => {
    console.log();
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
/*
router.post('/', async (req, res) => {
    let users = await readFromFile();
    console.log(users.users);


})
*/
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
                    
                    if(pwd_ok){
                        res.json(users.users[user])
                    }
                }else{
                    res.status(400).json({ msg: "wrong credentials" })
                }
            }  
        } catch (error) {
        console.log(error);
        }
    }
)


module.exports = router;
