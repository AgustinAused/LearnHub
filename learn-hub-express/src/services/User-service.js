// Gettign the Newly created Mongoose Model we just created 
var User = require('../database/models/Usuario');



// Saving the context of this module inside the _the variable
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
      if (req.query.tipo) {
        filtros.tipo = req.query.tipo;
      }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",filtros)
        var Users = await User.paginate(filtros, options)
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
        var user = await User.findOne({ email: email });
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
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    
    var newUser = new User({
        name: user.name,
        email: user.email,
        date: new Date(),
        password: hashedPassword
    })

    try {
        // Saving the User 
        var savedUser = await newUser.save();
        var token = jwt.sign({
            id: savedUser._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating User")
    }
}

exports.updateUser = async function (user) {
    
    var id = {name :user.name}
    console.log(id)
    try {
        //Find the old User Object by the Id
        var oldUser = await User.findOne(id);
        console.log (oldUser)
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }
    // If no old User Object exists return false
    if (!oldUser) {
        return false;
    }
    //Edit the User Object
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    oldUser.name = user.name
    oldUser.email = user.email
    oldUser.password = hashedPassword
    try {
        var savedUser = await oldUser.save()
        return savedUser;
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
}

exports.deleteUser = async function (id) {
    console.log(id)
    // Delete the User
    try {
        var deleted = await User.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("User Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the User")
    }
}


exports.loginUser = async function (user) {

    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the User 
        console.log("login:",user)
        var _details = await User.findOne({
            email: user.email
        });
        var passwordIsValid = bcrypt.compareSync(user.password, _details.password);
        if (!passwordIsValid) return 0;

        var token = jwt.sign({
            id: _details._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return {token:token, user:_details};
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Login User")
    }

}
