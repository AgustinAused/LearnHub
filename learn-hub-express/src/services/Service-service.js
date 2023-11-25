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
    page: req.query.page || 1, // Número de página desde la solicitud
    limit: req.query.limit || 10, // Cantidad de documentos por página desde la solicitud
    populate: "responsable"
  };

  const filters = {};

  // Agregar filtros adicionales basados en parámetros de solicitud
  // Añadir filtros adicionales basados en parámetros de solicitud
  if (req.query.category) {
    filters.category = req.query.category;
  }

  if (req.query.type) {
    filters.type = req.query.type;
  }

  if (req.query.frequency) {
    filters.frequency = req.query.frequency;
  }

  if (req.query.rating) {
    filters.rating = req.query.rating;
  }
  // Try Catch the awaited promise to handle the error
  try {
    console.log("Query", filters);
    let services = await Service.paginate(filters, options);
    // Return the serviced list that was retured by the mongoose promise
    return services;
  } catch (e) {
    // return a Error message describing the reason
    console.log(e);
    throw Error("Error while getting service");
  }
};

// Async function to get the service by user
exports.getServiceByUser = async function (user) {
  // Get the token from the headers
  const token = user.headers.authorization;
  console.log("token", token);
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
    let services = await Service.findById(id);
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
  const token = service.headers.authorization;
//   console.log("token", token);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  const userId = decodedToken.id;
  const image = service.file;
  const data = service.body;
  console.log(userId)

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

    console.log(savedService.responsable)

    User.findByIdAndUpdate(
        userId,
        { $push: { services: savedServiceId, ref:'Servicios' } },
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
  try {
    //Find the old service Object by the Id
    var oldService = await Service.findById(id);
  } catch (e) {
    throw Error("Error occured while Finding the service");
  }
  // If no old service Object exists return false
  if (!oldService) {
    return false;
  }
  console.log(oldService);
  //Edit the service Object
  oldService.name = service.name;
  oldService.description = service.description;
  oldService.price = service.price;
  oldService.image = service.image;
  oldService.state = service.state;
  oldService.frecuency = service.frecuency;
  oldService.duration = service.duration;
  oldService.category = service.category;
  console.log(oldService);
  try {
    var savedService = await oldService.save();
    return savedService;
  } catch (e) {
    console.log(e);
    throw Error("And Error occured while updating the service");
  }
};

// Async function to delete a service
exports.deleteService = async function (id) {
  // Delete the service
  try {
    var deleted = await Service.remove({ _id: id });
    if (deleted.result.n === 0) {
      throw Error("service Could not be deleted");
    }
    return deleted;
  } catch (e) {
    console.log(e);
    throw Error("Error Occured while Deleting the service");
  }
};

// Async function to Unpublish Service
exports.unpublishService = async function (id) {
  try {
    // Find the service by ID
    let service = await Service.findById(id);
    // Check if the service exists
    if (!service) {
      throw Error("Service not found");
    }
    // Update the state to "Unpublish"
    service.state = "Unpublish";
    // Save the updated service
    let savedService = await service.save();

    return savedService;
  } catch (e) {
    console.log(e);
    throw Error("Error Occured while unpublishing the service");
  }
};
