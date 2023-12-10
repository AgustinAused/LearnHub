const express = require("express");
const UserController = require("../controllers/User-controller");
const router = express.Router();
const Authorization = require("../auth/authentication");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// importando middlewares

const {
  registervalidations,
  handleRegisterValidationResults,
} = require("./middle/registerValidation");
const {
  loginValidations,
  handleLoginValidationResults,
} = require("./middle/loginValidation");

// Configurando Multer para guardar archivos en una carpeta específica
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Configuración del destino de almacenamiento
    cb(null, 'public/usersProfileImages/');
  },
  filename: function (req, file, cb) {
    // Configuración del nombre de archivo
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// User router
/* GET users listing. */
router.get("/", function (req, res) {
  res.send("Llegaste a la ruta de api/user-routes");
});

router.post("/registration", upload.single("image"), UserController.createUser); // Create user

router.post("/login", UserController.loginUser); // Login user

router.get("/users", UserController.getUsers); // Get all the user
router.get("/userByToken", UserController.getUsersByToken); // Get user by mail
router.put("/update", Authorization, UserController.updateUser); // Update user
router.delete("/delete/:id", Authorization, UserController.deleteUserById); // Delete User
router.post("/resetPassword", UserController.resetPassword); // Reset password
router.post("/sendResetEmail", UserController.sendEmail); // Send reset email

module.exports = router;