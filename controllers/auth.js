const jwt = require('jsonwebtoken');

// AUTHORIZATION.
function authorization(req, res, next) {

    // CHECK IF TOKEN IS PRESENT.
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied. No token provided.');

    // VERIFY IF TOKEN IS VALID.
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded; // { _id: '498f9j3f923ffn932E4', privileges: 1, iat: 1597967032 }
        next();
    } catch (err) {
        return res.status(400).send('Invalid token.');
    }
}

// AUTHORIZATION LEVEL 1.
function authorizationlvl1(req, res, next) {

    // CHECK USERS PRIVILEGES LEVEL.
    if (req.user.privileges < 1) return res.status(403).send('Access Denied. Invalid permissions.');
    
    next();
}

// AUTHORIZATION LEVEL 10.
function authorizationlvl10(req, res, next) {

    // CHECK USERS PRIVILEGES LEVEL.
    if (req.user.privileges < 10) return res.status(403).send('Access Denied. Invalid permissions.');
    
    next();
}



module.exports = {
    authorization: authorization,
    authorizationlvl1: authorizationlvl1,
    authorizationlvl10: authorizationlvl10
}