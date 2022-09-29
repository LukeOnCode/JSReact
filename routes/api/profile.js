const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const {check, validationResult } = require('express-validator');
const {readFromFile, change} = require('../../utils/object_utils')

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
            let profile = await readFromFile();
            let user_profile;
            const {id} = req.user;
            //const {status, skills } = req.body;
            for (const key in profile) {
                const prop = profile[key];
                for(const users in prop){
                    const user = prop[users];
                    if(id === user.id){
                        user_profile = users;
                    } 
                }
                let skills = req.body.skills.split(',').map(skill => skill.trim())
                let status = req.body.status;
                change(id,{status,skills});
                profile.users[user_profile].profile.pop({status,skills})
                profile.users[user_profile].profile.push({status,skills})
            res.json(profile.users[user_profile])
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('server error')
        }
})


router.get('/all', async (req, res) => {
    const profile = await readFromFile();
    res.json(profile)
})
module.exports = router;