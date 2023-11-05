
const express = require('express');
const UserController = require('../controllers/User-controller');
const router = express.Router();
const Authorization = require('../auth/authentication');

//User router
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user.routes');
});
// router.post('/registration', UserController.createUser) 
// router.post('/login/', UserController.loginUser)
router.get('/users',Authorization, UserController.getUsers); //Get all the user
router.post('/userByMail', Authorization, UserController.getUsersByMail); //Get user by mail
router.post('/createUser',Authorization,UserController.createUser); //create User
router.put('/update', Authorization, UserController.updateUser); //Update user 
router.delete('/delete/:id', Authorization, UserController.deleteUserById); //Delete User


module.exports = router;
