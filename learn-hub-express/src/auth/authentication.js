var jwt = require('jsonwebtoken');
require('dotenv').config();

var authorization = function (req, res, next) {

    var token = req.headers['x-access-token'];
    console.log("token",token);
    var msg = {auth: false, message: 'No token provided.'};
    if (!token){
        return res.status(500).send(msg);
    }

    let sec = process.env.SECRET;
    console.log("secret",sec)
    jwt.verify(token, sec, function (err, decoded) {
        var msg = {auth: false, message: 'Failed to authenticate token.'};
        if (err)
        return res.status(500).send(msg);
        req.userId = decoded.id;
        next();
    });
}

module.exports = authorization;