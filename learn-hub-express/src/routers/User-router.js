
const express = require('express');
const UserController = require('../controllers/User-controller');
const router = express.Router();
const Authorization = require('../auth/authentication');

//User router
/* GET users listing. */
router.get('/', function(req, res) {
    res.send('Llegaste a la ruta de  api/user-routes');
});

router.post('/registration', UserController.createUser); //Create user
router.post('/login', UserController.loginUser); //Login user
router.get('/users', UserController.getUsers); //Get all the user
router.post('/userByMail', Authorization, UserController.getUsersByMail); //Get user by mail
router.put('/update', Authorization, UserController.updateUser); //Update user 
router.delete('/delete/:id', Authorization, UserController.deleteUserById); //Delete User
router.post('/resetPassword/:token',Authorization , UserController.resetPassword); //Reset password
router.post('/sendResetEmail', UserController.sendEmail); //Send reset email


module.exports = router;
