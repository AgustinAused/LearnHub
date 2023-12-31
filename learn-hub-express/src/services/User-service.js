// Gettign the Newly created Mongoose Model we just created
let User = require("../database/models/Usuario");
const nodemailer = require("nodemailer");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
// const fs = require("fs");
// const path = require("path");
require('dotenv').config()

// Saving the context of this module inside the _the letiable
_this = this;

// Async function to get the User List
exports.getUsers = async function (req) {
  // Options setup for the mongoose paginate
  const options = {
    page: req.query.page || 1, // Número de página desde la solicitud
    limit: req.query.limit || 10, // Cantidad de documentos por página desde la solicitud
  };

  const filtros = {};

  // Agregar filtros adicionales basados en parámetros de solicitud
  if (req.query.email) {
    filtros.email = req.query.email;
  }
  // Try Catch the awaited promise to handle the error
  try {
    console.log("Query", filtros);
    let Users = await User.paginate(filtros, options);
    // Return the Userd list that was retured by the mongoose promise
    return Users;
  } catch (e) {
    // return a Error message describing the reason
    console.log("error services", e);
    throw Error("Error while Paginating Users");
  }
};
exports.getUsersByToken = async function (req) {
  // Get the token from the headers
  const token = req.headers.authorization?.split(" ")[1];
  // Verify and decode the token
  const decodedToken = jwt.verify(token, process.env.SECRET);

  // Extract the user ID from the decoded token
  const userId = decodedToken.id;

  // Use the user ID to retrieve the user from the database
  try {
    const user = await User.findById(userId);
    //armo el objeto que voy a devolver
    let userResponse = {
      name: user.name,
      email: user.email,
      phono: user.phono,
      image: user.image,
      creationDate: user.creationDate,
      degree: user.degree,
      expirience: user.expirience,
    };

    return userResponse;
  } catch (e) {
    console.log("error services", e);
    throw Error("Error while getting user by token");
  }
};

exports.createUser = async function (data) {
  // Creating a new Mongoose Object by using the new keyword
  const user = data.body;
  let hashedPassword = bcrypt.hashSync(user.password, 8);
  
  //si el correo ya existe devuelvo false
  const existingUser = await User.findOne({ email: user.email });
  
  if (existingUser) {
    // Si el correo ya existe, devolver false
    return false;
  }
  
  console.log('Llegué aquí');
  
  // console.log('llegue aca')
  let newUser = new User({
    name: user.name,
    email: user.email,
    creationDate: new Date(),
    password: hashedPassword,
    phono: user.phono,
  });
  
  // Check if the user has provided an image
  if (data.file && data.file.path) {
    newUser.image = data.file.filename;
  } else {
    // Use a default image in case the user has not provided one or if file.path is not available
    newUser.image = "default-user-image.png";
  }
  try {
    let savedUser = await newUser.save();
    if (savedUser) {
      let ok = true;
      return ok;
    }
    return ok;
  } catch (e) {
    console.log("error services", e);
    throw Error("Error while creating user");
  }
};

exports.updateUser = async function (req) {
  try {
    //Find the old User Object by the Id
    const token = req.headers.authorization?.split(" ")[1];

    
    // Use async/await with jwt.verify
    let decoded = await jwt.verify(token, process.env.SECRET);
    let _id = decoded.id;
    let newUser = req.body; //expirence titulo
    let oldUser = await User.findById(_id);
    // console.log (oldUser)
    // If no old User Object exists return false
    if (!oldUser) {
      return false;
    }
    //Edit the User Object
    if (newUser.titulo) oldUser.degree = newUser.titulo;
    if (newUser.experiencia) oldUser.expirience = newUser.experiencia;
    if (newUser.name) oldUser.name = newUser.name;
    if (newUser.degree) oldUser.degree = newUser.degree;
    if (newUser.email) oldUser.email = newUser.email;
    if (newUser.phono) oldUser.phono = newUser.phono;
    if (newUser.password) {
      let hashedPassword = bcrypt.hashSync(newUser.password, 8);
      oldUser.password = hashedPassword;
    }
    if (req.file) {
      oldUser.image = req.file.filename;
    }
    // console.log(oldUser)
    // Save the edited User Object

    let savedUser = await oldUser.save();
    return savedUser;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("And Error occured while updating the User");
  }
};

exports.deleteUser = async function (id) {
  console.log(id);
  // Delete the User
  try {
    let deleted = await User.remove({
      _id: id,
    });
    if (deleted.n === 0 && deleted.ok === 1) {
      throw Error("User Could not be deleted");
    }
    return deleted;
  } catch (e) {
    console.log(e);
    throw Error("Error Occured while Deleting the User");
  }
};

exports.loginUser = async function (user) {
  try {
    // Find the User
    console.log("login:", user);
    let _details = await User.findOne({
      email: user.email,
    });

    let passwordIsValid = bcrypt.compareSync(user.password, _details.password);
    console.log(passwordIsValid)
    if (!_details || !passwordIsValid) {
      throw Error("User or Password invalid");
    }
    // Create and Save JWT Token
    const token = jwt.sign({ id: _details._id }, process.env.SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });


    return token;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error while Login User");
  }
};

exports.sendResetEmail = async function (user) {
  console.log("user", user);
  // Crear un token de restablecimiento de contraseña para el usuario
  const resetToken = jwt.sign({ id: user[0]._id }, process.env.SECRET);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Construir el enlace de restablecimiento
  const resetLink = `http://localhost:3000/recuperar/newpassword?token=${resetToken}`;

  // Configurar el correo electrónico
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user[0].email,
    subject: "Restablecimiento de Contraseña",

    text: 
    //capitalizar el nombre
    `Querido ${(user[0].name) }
    
    Esperamos que este mensaje te encuentre bien. Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. 
    
    Entendemos lo importante que es para ti acceder a tu cuenta de manera segura y estamos aquí para ayudarte.
    
    Por favor, haz clic en el siguiente enlace para restablecer tu contraseña:
    
    ${resetLink}
    
    ¡Gracias por confiar en Nosotros!
    
    Atentamente,
    
    El Equipo de Learn Hub`
  };

  // Enviar el correo electrónico
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Correo enviado: " + info.response);
    }
  });
};

// Reset Password
exports.resetPassword = async (data) => {
  try {
    // Verificar si se proporciona un token de autorización
    const token = data.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error('Token de autorización no proporcionado');
    }

    // Decodificar el token para obtener el ID del usuario
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const userId = decodedToken.id;

    // Obtener la nueva contraseña del cuerpo de la solicitud
    const newPassword = data.body.password;

    // Hashear la nueva contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Utilizar findByIdAndUpdate para actualizar la contraseña en la base de datos
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { password: hashedPassword } },
      { new: true } // Devolver el documento actualizado
    );

    // Verificar si el usuario fue encontrado y actualizado
    if (!updatedUser) {
      throw new Error('Usuario no encontrado');
    }

    // Retornar el usuario actualizado
    return updatedUser;
  } catch (error) {
    console.error('Error al restablecer la contraseña:', error.message);
    throw new Error('Error al restablecer la contraseña');
  }
};