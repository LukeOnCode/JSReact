const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const gravatar = require('gravatar');
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

router.post('/', async (req, res) => {
    let users = await readFromFile();
    console.log(users.users);

})

module.exports = router;