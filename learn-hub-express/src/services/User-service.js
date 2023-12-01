// Gettign the Newly created Mongoose Model we just created 
let User = require('../database/models/Usuario');
const nodemailer = require('nodemailer');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');




// Saving the context of this module inside the _the letiable
_this = this

// Async function to get the User List
exports.getUsers = async function (req) {

    // Options setup for the mongoose paginate
    const options = {
        page: req.query.page || 1,   // Número de página desde la solicitud
        limit: req.query.limit || 10, // Cantidad de documentos por página desde la solicitud
      };
    
      const filtros = {};
    
      // Agregar filtros adicionales basados en parámetros de solicitud
      if (req.query.email) {
        filtros.email = req.query.email;
      }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",filtros)
        let Users = await User.paginate(filtros, options)
        // Return the Userd list that was retured by the mongoose promise
        return Users;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Users');
    }
}
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
        console.log(user)
        //armo el objeto que voy a devolver
        let userResponse = {
            name: user.name,
            email: user.email,
            phono: user.phono,
            image: user.image,
            creationDate: user.creationDate,
        }

        return userResponse;
    } catch (e) {
        console.log("error services", e);
        throw Error('Error while getting user by token');
    }
}

exports.createUser = async function (data) {
    // Creating a new Mongoose Object by using the new keyword
    const user = data.body;
    const image = data.file;
    let hashedPassword = bcrypt.hashSync(user.password, 8);

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
            contentType: image.mimetype
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
        if(savedUser){
            let ok =true;
            return ok;
        }
        
        return ok;
    } catch (e) {
        console.log("error services",e)
        throw Error('Error while creating user');
    }
}

exports.updateUser = async function (user) { 
    
    try {
        //Find the old User Object by the Id
        console.log(user._id)
        let oldUser = await User.findOne(user._id);
        console.log (oldUser)
    } catch (e) {
        // return a Error message describing the reason
        console.log(e)
        throw Error("Error occured while Finding the User")
    }
    // If no old User Object exists return false
    if (!oldUser) {
        return false;
    }
    //rehacer logica
    //Edit the User Object
    let hashedPassword = bcrypt.hashSync(user.password, 8);
    if (user.nombre) oldUser.nombre = user.nombre;
    if (user.email) oldUser.email = user.email;
    if (user.password) oldUser.password = bcrypt.hashSync(user.password, 8);
    if (user.titulo) oldUser.titulo = user.titulo;
    if (user.telefono) oldUser.telefono = user.telefono;
    if (user.nacimiento) oldUser.nacimiento = user.nacimiento;

    try {
        let savedUser = await oldUser.save()
        return savedUser;
    } catch (e) {
        // return a Error message describing the reason
        console.log(e);
        throw Error("And Error occured while updating the User");
    }
}

exports.deleteUser = async function (id) {
    console.log(id)
    // Delete the User
    try {
        let deleted = await User.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("User Could not be deleted")
        }
        return deleted;
    } catch (e) {
        console.log(e)
        throw Error("Error Occured while Deleting the User")
    }
}


exports.loginUser = async function (user) {

    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the User 
        console.log("login:",user)
        let _details = await User.findOne({
            email: user.email
        });
        if (!_details) {
            throw Error("Error while Login User");
        }
        let passwordIsValid = bcrypt.compareSync(user.password, _details.password);

        
        if (!passwordIsValid) return 0;

        let token = jwt.sign({
            id: _details._id
        }, process.env.SECRET);
        return token;
    } catch (e) {
        // return a Error message describing the reason   
        console.log(e) 
        throw Error("Error while Login User")
    }

}




exports.sendResetEmail = async function (email, resetToken) {
    // Configurar el transporte de correo
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Construir el enlace de restablecimiento
    const resetLink = `http://localhost:4050/api/user/resetPassword?token=${resetToken}`;

    // Configurar el correo electrónico
    const mailOptions = {
        from: 'tuaplicacion@gmail.com',
        to: email,
        subject: 'Restablecimiento de Contraseña',
        text: `Para restablecer tu contraseña, haz clic en el siguiente enlace: ${resetLink}`,
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);
}


// Reset Password
exports.resetPassword = async ({email, newPassword}) =>{
    try {
        // Obtener el usuario basado en el token de restablecimiento de contraseña
        const user = await User.findOne({ email: email });
        // Si no se encuentra ningún usuario, puedes retornar null o un mensaje indicando que el usuario no fue encontrado
        if (!user) {
            throw Error('Usuario no encontrado');
        }
        // Actualizar la contraseña del usuario
        user.password = newPassword;
        // Guardar el usuario en la base de datos
        await user.save();
        // Retornar el usuario
        return user;
    } catch (error){
        console.log(error)
        throw error
    }
}
