// Import User service
const generateResetToken = require("../auth/AccountReset");
const UserService = require("../services/User-service");

// Create a new user
exports.createUser = async (req, res) => {
    try {
        console.log(req.body)
        const user = await UserService.createUser(req);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await UserService.getUsers(req);
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single user 
exports.getUsersByToken = async (req, res) => {
    try {
        const user = await UserService.getUsersByToken(req);
        res.json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Update a user 
exports.updateUser = async (req, res) => {
    try {
        
        const user = await UserService.updateUser(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a user
exports.deleteUserById = async (req, res) => {
    try {
        await UserService.deleteUserById(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.loginUser = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("body",req.body)
    var User = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var loginUser = await UserService.loginUser(User);
        if (loginUser===0)
            return res.status(400).json({message: "Error en la contraseña"})
        else
            return res.status(200).json({loginUser, message: "Succesfully login"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Invalid username or password"})
    }
}


// send emial for recovery account
exports.sendEmail = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("body",req.body)
    var User = {
        email: req.body.email
    }
    try {
        let oldUser = await UserService.getUsersByMail(User.email);
        console.log(oldUser);

        let newToken = generateResetToken(oldUser.id);
        console.log(newToken);
        await UserService.sendResetEmail(User.email,newToken);
        return res.status(200).json({status: 200, message: "Recovery email sent successfully"})

    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "User not found"})
    }
} 

//send email recovery account

exports.resetPassword = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("body",req.body)
    var User = {
        email: req.body.email,
        password: req.body.password,
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var resetPassword = await UserService.resetPassword(User); 
        if (resetPassword===0)
            return res.status(400).json({message: "Error en la contraseña"})
        else
            return res.status(200).json({resetPassword, message: "Succesfully reset password"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Invalid username or password"})
    }
}
