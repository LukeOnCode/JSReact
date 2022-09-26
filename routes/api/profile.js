const express = require('express');
const router = express.Router();

// @route  GET api/profile
// @desc   profile router
// @access  private
router.get('/', (req, res) => {
    res.send('Profile route');
})

module.exports = router;