const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')
const {readFromFile, change} = require('../../utils/object_utils')
const {check, validationResult} = require('express-validator')
//TODO route.delete

// @route  POST api/post
// @desc   create user post 
// @access private
router.post('/',
    [auth,
        [
            check('text', 'Text is required').not().isEmpty()
        ]
    ],async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
        let user_profile;
        const obj = await readFromFile();
        const {id} = req.user;
        let text = req.body.text;
        for (const key in obj) {
            const prop = obj[key];
            for(const users in prop){
                const user = prop[users];
                if(id === user.id){
                    user_profile = users;
                }
            }
            let param = 'posts'
            change(id, text, param);
            obj.users[user_profile].post = [{text}];
        return res.status(200).json(obj.users[user_profile])
        }
    }
)
// @route  GET api/post/all
// @desc   get all users post 
// @access private
router.get('/all', auth, async (req, res)=> {
    const obj = await readFromFile();
    const {id} = req.user;
    let user_profile;
    for (const key in obj) {
        const prop = obj[key];
        for(const users in prop){
            const user = prop[users];
            if(id === user.id){
                user_profile = users;
                return res.json(obj.users)
            } 
        }
    }
    return res.status(400).json({msg: "no post found"})
})

// @route  GET api/post/user_id
// @desc   post router for user post
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
module.exports = router;