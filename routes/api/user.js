const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');

// @route  POST api/users
// @desc   Register user router
// @access Public
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
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
    const { name, email, password } = req.body;
    i++;
    users[`user${i}`] = {email: req.body.email,name:req.body.name,pwd:req.body.password};
    console.log(users);

/*    if(users.email){
        users ={}
        res.status(400).json({ errors: [{msg: 'User already exists'}] })
    }
*/    
    res.send('User route');
    }
)

module.exports = router;