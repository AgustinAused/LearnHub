// Gettign the Newly created Mongoose Model we just created 
let User = require('../database/models/Usuario');
const nodemailer = require('nodemailer');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');



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
exports.getUsersByMail = async function (email) {
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Email:", email);
        // Utiliza el método findOne de Mongoose para buscar un usuario por su dirección de correo electrónico
        let user = await User.findOne({ email: email });
        // Si no se encuentra ningún usuario, puedes retornar null o un mensaje indicando que el usuario no fue encontrado
        if (!user) {
            return null; // O puedes lanzar un error si lo prefieres: throw Error('Usuario no encontrado');
        }
        // Return the Userd list that was retured by the mongoose promise
        return user;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Users');
    }
}

exports.createUser = async function (user) {
    // Creating a new Mongoose Object by using the new keyword
    let hashedPassword = bcrypt.hashSync(user.password, 8);

    //comprobar que sean el tipo de datos correctos
        
    let newUser = new User({
        name: user.name,
        email: user.email,
        creationDate: new Date(),
        password: hashedPassword,
        phono: user.phono
    })

    try {
        // Saving the User 
        let savedUser = await newUser.save();
        //si logra crear el usuario, manda una respuesta de bien
        if(savedUser){
            let ok =true;
            return ok;
        }
        
        return ok;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating User")
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
    oldUser.nombre = user.nombre ? user.nombre : oldUser.nombre;
    oldUser.email = user.email ? user.email : oldUser.email;
    oldUser.password = hashedPassword ? hashedPassword : oldUser.password;
    oldUser.titulo = user.titulo ? user.titulo : oldUser.titulo;
    oldUser.telefono = user.telefono ? user.telefono : oldUser.telefono;
    oldUser.nacimiento = user.nacimiento ? user.nacimiento : oldUser.nacimiento;
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
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
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
