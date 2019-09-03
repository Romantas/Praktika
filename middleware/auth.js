const config = require('config');
const jwt = require('jsonwebtoken');

function auth(...allowed) {
    return (req, res, next) => {
        const token = req.header('x-auth-token');
        // Check for token
        if(!token) return res.status(401).json({msg: 'No token, authorization denied'});

        try {
            // Verify token
            const decoded = jwt.verify(token, config.get('jwtSecret'));
            if(allowed == decoded.role){
                req.user = decoded;
                next();
            }
            else return res.status(403).json({msg: 'Forbidden'})

            //next();
        } catch (e) {
            res.status(400).json({msg: 'Token is not valid'});
        }
    }
}

module.exports = auth;
