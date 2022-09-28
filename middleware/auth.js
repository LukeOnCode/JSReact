const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    // get token from header
    const token = req.header('x-auth-token');
    console.log('auth function');
    //check if no token
    if(!token){
        return res.status(401).json({msg: 'No token for authorization'})
    }

    //verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Token invalid' })
    }
}