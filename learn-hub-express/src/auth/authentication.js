let jwt = require('jsonwebtoken');
require('dotenv').config();

let authorization = function (req, res, next) {

    const token = req.headers.authorization?.split(" ")[1];
    console.log("token",token);
    let msg = {auth: false, message: 'No token provided.'};
    if (!token){
        return res.status(403).send(msg);
    }

    let sec = process.env.SECRET;
    console.log("secret",sec)
    jwt.verify(token, sec, function (err, decoded) {
        let msg = {auth: false, message: 'Failed to authenticate token.'};
        if (err){
            console.log(err)
            return res.status(500).send(msg);
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = authorization;