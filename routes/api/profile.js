const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const {check, validationResult } = require('express-validator');
const {readFromFile} = require('../../utils/object_utils')

// @route  GET api/profile/my_profile
// @desc   profile router for user
// @access private
router.get('/', auth, async (req, res) => {
    try {
        const profile = await readFromFile();
        let user_profile;
        const {id} = req.user;
        for (const key in profile) {
            const prop = profile[key];
            for(const users in prop){
                const user = prop[users];
                if(id === user.id){
                    user_profile = users;
                } 
            }
        res.json(profile.users[user_profile])
        }
        console.log(user_profile);
    } catch (error) {
        console.log(error);
        res.status(500).send('server error')
    }
})

// @route  POST api/profile/my_profile
// @desc   create/update user profile
// @access private
router.post('/', [
        auth,[
        check('status', 'Status is required').not().isEmpty(),
        check('skills', 'Skills is required').not().isEmpty()
    ] ], async (req, res)=>{  
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()})
        }
        try {
            const profile = await readFromFile();
            let user_profile;
            const {id} = req.user;
            for (const key in profile) {
                const prop = profile[key];
                for(const users in prop){
                    const user = prop[users];
                    if(id === user.id){
                        user_profile = users;
                    } 
                }
                profile.users[user_profile].profile.push({...req.body})
            res.json(profile.users[user_profile])
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('server error')
        }

})
module.exports = router;