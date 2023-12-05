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
  const token = req.headers.authorization;
  // Verify and decode the token
  const decodedToken = jwt.verify(token, process.env.SECRET);

  // Extract the user ID from the decoded token
  const userId = decodedToken.id;

  // Use the user ID to retrieve the user from the database
  try {
    const user = await User.findById(userId);
    console.log(user);
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
  const image = data.file;
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
  if (image) {
    newUser.image = {
      data: image.buffer,
      contentType: image.mimetype,
    };
  } else {
    // Use a default image
    newUser.image = {
      // data: fs.readFileSync(path.join(__dirname, '../path/to/default/image.png')),
      // contentType: 'image/png'
    };
  }

  try {
    let savedUser = await newUser.save();
    if (savedUser) {
      let ok = true;
      return ok;
    }
    console.log(savedUser);
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

    // Declare decoded outside the jwt.verify callback
    let decoded;
    // Use async/await with jwt.verify
    decoded = await jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    let _id = decoded.id;
    console.log(_id);
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

    let savedUser = await oldUser.save();
    console.log(savedUser);
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
    console.log(_details);

    let passwordIsValid = bcrypt.compareSync(user.password, _details.password);
    console.log(passwordIsValid)
    if (!_details || !passwordIsValid) {
      throw Error("User or Password invalid");
    }
    // Create and Save JWT Token
    const token = jwt.sign({ id: _details._id }, process.env.SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });

    // console.log("token", token);

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
    text: `Para restablecer tu contraseña, haz clic en el siguiente enlace: ${resetLink}`,
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
exports.resetPassword = async ( data ) => {
  const token = data.headers.authorization?.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.SECRET);
  const userId = decodedToken.id;
  const newPassword = data.body.password;
console.log("newPassword",newPassword)
console.log("userId",userId)
console.log("token",token)
  try {
    // Hashear la nueva contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Utilizar findByIdAndUpdate para actualizar la contraseña directamente en la base de datos
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {$set: { password: hashedPassword }, // Agregar la nueva contraseña },
     }
       // Devolver el documento actualizado
    );

    // Verificar si el usuario fue encontrado y actualizado
    if (!updatedUser) {
      throw new Error("Usuario no encontrado");
    }

    // Retornar el usuario actualizado
    return updatedUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
