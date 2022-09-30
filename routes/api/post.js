const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')
const {readFromFile} = require('../../utils/object_utils')
const {check, validationResult} = require('express-validator')

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
            obj.users[user_profile].post = [{text}];
        return res.status(200).json(obj.users[user_profile])
        }
    }
)

module.exports = router;