const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { v4: uuidv4 } = require('uuid');
const {check, validationResult } = require('express-validator');
const {time, writeToFile} = require('../../utils/object_utils')

// @route  POST api/users
// @desc   Register user router
// @access Private
router.get('/', (req, res) => {
    res.send('User route');
})

let users = {};
let i = 0;
router.post(
    '/',
    [
        check('name','Name is required').not().isEmpty(),
        check('email', 'Please insert valid email').isEmail(),
        check('password', 'Please enter a valid password').isLength({min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        for (const key in users) {
            const prop = users[key];

            if(prop.email === req.body.email){
                console.log(`STOP ON ${prop.email}`);    
                return res.status(400).json({ errors: [{ msg: 'User already exist with same email' }] })
            }
            
            if(prop.name === req.body.name){
                console.log(`STOP ON ${prop.name}`);
                return res.status(400).json({ errors: [{ msg: 'User already exist with same name' }] })
            }
        }

        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        
        const avatar = gravatar.url(req.body.email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        i++;
        users[`user_${i}`] = {
            id: uuidv4(),
            email: req.body.email,
            name: req.body.name,
            avatar: avatar,
            pwd: req.body.password,
            date: time(),
            profile: [{}]
        };            
        writeToFile(users);
        console.log(users);       

        let keys = Object.keys(users);
        let last = keys[keys.length-1];
  
        if (Object.hasOwn(users, last)) {
            const element = users[last];
            const payload = {
                user: {
                    id: element.id,
                    email: element.email,
                    name: element.name,
                    avatar: avatar,
                    date: element.date
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
)

module.exports = router;