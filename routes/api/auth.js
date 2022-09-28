const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// @route  GET api/auth
// @desc   AUTH router
// @access public
router.get('/', auth, (req, res) => {

    try {
        console.log(req.user)
        res.json(req.user)
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;
