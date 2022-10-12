const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const {check, validationResult } = require('express-validator');
const {readFromFile, change, changeDelete} = require('../../utils/object_utils')


// @route  GET api/profile/my_profile
// @desc   profile router for user with auth
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
                let param = 'profile';
                change(id,{status,skills}, param);
                console.log(profile.users[user_profile].profile);
                profile.users[user_profile].profile.pop({status,skills})
                profile.users[user_profile].profile.push({status,skills})
            res.json(profile.users[user_profile])
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('server error')
        }
})

// @route  GET api/profile/all_profile
// @desc   profile router for user to find all users
// @access private
router.get('/all', async (req, res) => {
    const profile = await readFromFile();
    res.json(profile)
})

// @route  GET api/profile/user/user_id
// @desc   profile router for user
// @access private
router.get('/user/:user_id',async (req, res)=> {
    const obj = await readFromFile();
    const id = req.params.user_id;
    let user_profile;
    for (const key in obj) {
        const prop = obj[key];
        for(const users in prop){
            const user = prop[users];
            if(id === user.id){
                user_profile = users;
                return res.json(obj.users[user_profile])
            } 
        }
    }
    return res.status(400).json({msg: "no user found"})
})

router.delete('/',auth, async (req, res)=> {
    const obj = await readFromFile();
    const {id} = req.user;
    let user_profile;
    for (const key in obj) {
        const prop = obj[key];
        for(const users in prop){
            const user = prop[users];
            if(id === user.id){
                user_profile = users;
                //delete obj.users[user_profile];
                changeDelete(user_profile);
                return res.json({msg: "User deleted"})
            } 
        }
    }
    return res.status(400).json({msg: "no user found"})
})

module.exports = router;
