const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const {check, validationResult } = require('express-validator');

// @route  POST api/users
// @desc   Register user router
// @access Private
router.get('/', (req, res) => {
    console.log(req.body);
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
            console.log(`${key}: ${prop.email}`);
            console.log(`${prop.email} and ${req.body.email}`);
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
        users[`user_${i}`]= {email: req.body.email,name: req.body.name,avatar: avatar,pwd: req.body.password};            
        console.log(users);       
    
    res.send('User route');
    }
)

module.exports = router;