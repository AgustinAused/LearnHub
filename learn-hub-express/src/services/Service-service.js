let Service = require("../database/models/Servicio");
let User = require("../database/models/Usuario");
let mongoose = require("mongoose");
const nodemailer = require("nodemailer");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

// Saving the context of this module inside the _the variable
let _this = this;

// Async function to get the service list
exports.getService = async function (req) {
  const options = {
    page: req.query.pages || 1,
    limit: req.query.limit || 10,
    populate: "responsable",
  };

  const filters = {
    state: "Publish",
  };

  // Verificar si hay filtros y si la cadena JSON es válida
  if (req.query.filters) {
    try {
      const parsedFilters = JSON.parse(req.query.filters);

      // Fusionar los filtros en el objeto filters
      Object.assign(filters, parsedFilters);
    } catch (error) {
      console.error("Error al parsear los filtros JSON:", error);
      throw new Error("Filtros JSON no válidos");
    }
  }

  try {
    console.log("Query", filters);
    // Asegúrate de que Service.paginate esté definido y haga lo que esperas
    let services = await Service.paginate(filters, options);
    console.log(services);
    return services;
  } catch (e) {
    console.error(e);
    throw new Error("Error al obtener el servicio");
  }
};


// Async function to get the service by user
exports.getServiceByUser = async function (user) {
  // Get the token from the headers
  const token = user.headers.authorization?.split(" ")[1];
  // Verify and decode the token
  const decodedToken = jwt.verify(token, process.env.SECRET);

  // Extract the user ID from the decoded token
  const userId = decodedToken.id;
  let service = [];
  try {
    // Find the user
    let _user = await User.findById(userId).populate("services");
    service = _user.services;
    // Return the service list that was retured by the mongoose promise
    return service;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error while getting service");
  }
};
// Async function to get the service by id
exports.getServiceById = async function (id) {
  // Try Catch the awaited promise to handle the error
  try {
    // Find the service
    let services = await Service.findById(id).populate([{path: 'responsable'}, {path: 'comments'}]);
    // Return the service list that was retured by the mongoose promise
    return services;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error while getting services");
  }
};

// Async function to add a new service
exports.createService = async function (service) {
  //obtener el id del usuario
  const token = service.headers.authorization?.split(" ")[1];
  console.log(service.file);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  const userId = decodedToken.id;
  const image = service.file;
  console.log(image);
  const data = service.body;
  console.log(userId)
  console.log(data)

  // Creating a new Mongoose Object by using the new keyword
  let newService = new Service({
    name: data.title,
    description: data.description,
    price: data.price,
    date: Date.now(),
    state: data.state,
    frequency: data.frequency,
    duration: data.duration,
    category: data.category,
    classType: data.classType,
  });
  // Check if the user has provided an image
  if (image) {
    newService.image = {
      data: image.buffer,
      contentType: image.mimetype,
    };
  }
  //   } else {
  //     // Use a default image
  //     newService.image = {
  //       data: fs.readFileSync(
  //         path.join(__dirname, "../path/to/default/image.png")
  //       ),
  //       contentType: "image/png",
  //     };
  //   }
  try {
    // Saving the service
    newService.responsable = userId;
    let savedService = await newService.save();
    // agregar el id de usuario al servicio
    // console.log(savedService)


    // Update the User with the new service
    // busco al usuario por id y le agrego el servicio


    User.findByIdAndUpdate(
        userId,
        { $push: { services: savedService._id, ref:'Servicios' } },
        { new: true }
      )
        .then((usuarioActualizado) => {
          // console.log('Usuario actualizado:', usuarioActualizado);
        })
        .catch((err) => {
          console.error(err);
        });

    return savedService;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error while Creating service");
  }
};

// Async function to update a new service
exports.updateService = async function (service) {
  var id = service.id;
  
    //Find the old service Object by the Id
    let oldService = await Service.findById(id);
  // If no old service Object exists return false
  if (!oldService) {
    return "Luegue aca";
  }
  console.log(oldService);
  //Edit the service Object
  oldService.name = service.name;
  oldService.description = service.description;
  oldService.price = service.price;
  // oldService.image = service.image;
  oldService.state = service.state;
  oldService.frecuency = service.frecuency;
  oldService.duration = service.duration;
  oldService.category = service.category;
  oldService.classType = service.classType;
  try {
    var savedService = await oldService.save();
    console.log(savedService);
    let userId = savedService.responsable;
    // Find and Update the user with this service
    let user = await User.findById({_id : userId});
    user.services.pull({_id : savedService._id});
    user.services.push(savedService._id);
    let savedUser = await user.save();
    
    return savedService;
  } catch (e) {
    console.log(e);
    throw Error("And Error occured while updating the service");
  }
};

// Async function to delete a service
exports.deleteService = async function (req) {
  // Delete the service
  try {
        // Delete the service
        const deletedService = await Service.findOneAndDelete({ _id: req.params.id }).populate('responsable');
        
        console.log(deletedService)
        console.log(deletedService.responsable)
        // Remove the service from the user's services array
        const user = await User.findOne({ _id : deletedService.responsable});
        console.log(user)
        console.log(user.services)
        user.services.pull({_id : deletedService._id});
        // console.log(user)
        await user.save();
      console.log("Service deleted");
      return deletedService;
  } catch (e) {
    console.log(e);
    throw Error("Error Occured while Deleting the service");
  }
};

// Async function to Unpublish Service
exports.unpublishService = async function (id) {

  try {
    let service = await Service.findById({_id : id});
    // Check if the service exists
    if (!service) {
      throw Error("Service not found");
    }
    // Update the state to "Unpublish"
    service.state = "Unpublish";
    // Save the updated service
    let savedService = await service.save();
    console.log(savedService)
   
    let userId = savedService.responsable;
    let user = await User.findById({_id : userId});
    user.services.pull({_id : savedService._id});
    user.services.push(savedService._id);
    let savedUser = await user.save();
    console.log(savedUser)

    return savedService;
  } catch (e) {
    console.log(e);
    throw Error("Error Occured while unpublishing the service");
  }
};

exports.publishService = async function (id) {
  try {
    let service = await Service.findById({_id : id});
    // Check if the service exists
    if (!service) {
      throw Error("Service not found");
    }
    // Update the state to "Unpublish"
    service.state = "Publish";

    let savedService = await service.save();
   
    let userId = savedService.responsable;
    let user = await User.findById({_id : userId});
    user.services.pull({_id : savedService._id});
    user.services.push(savedService._id);
    let savedUser = await user.save();
    


    return savedService;
  } catch (e) {
    console.log(e);
    throw Error("Error Occured while publishing the service");
  }
}