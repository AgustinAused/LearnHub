let Service = require('../database/models/Servicio');
let User = require('../database/models/Usuario');
const nodemailer = require('nodemailer');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');


// Saving the context of this module inside the _the variable
let _this = this

// Async function to get the service list
exports.getService = async function (req) {
    const options = {
        page: req.query.page || 1,   // Número de página desde la solicitud
        limit: req.query.limit || 10, // Cantidad de documentos por página desde la solicitud
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
        console.log("Query", filters)
        let services = await Service.paginate(filters, options)
        // Return the serviced list that was retured by the mongoose promise
        return services;
    } catch (e) {
        // return a Error message describing the reason
        console.log(e)
        throw Error('Error while getting service')
    }
}

// Async function to get the service by user
exports.getServiceByUser = async function (user) {
    // Get the token from the headers
    const token = user.headers.authorization;
    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.SECRET);
    
    // Extract the user ID from the decoded token
    const userId = decodedToken.id;
    

    let services = []
    try {
        // Find the user 
        let _user = await User.findById(userId).populate('Servicio');;
        
        // Get the service list 
        services = _user.services;
        // Return the service list that was retured by the mongoose promise
        return services;
    } catch (e) {
        // return a Error message describing the reason
        console.log(e)
        throw Error('Error while getting service');
    }
};
// Async function to get the service by id
exports.getServiceById = async function (id) {
    // Try Catch the awaited promise to handle the error 
    try {
        // Find the service 
        let services = await Service.findById(id).populate('services');
        // Return the service list that was retured by the mongoose promise
        return services;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)
        throw Error('Error while getting services')
    }
}


// Async function to add a new service
exports.createService = async function (service) {
    // Creating a new Mongoose Object by using the new keyword
    var newService = new Service({
        name: service.name,
        description: service.description,
        date: new Date(),
        price: service.price,
        image: service.image,
        state: service.state,
        frecuency: service.frecuency,
        duration: service.duration,
        category: service.category,
        comments: service.comments,
        contracts: service.contracts
    });
    try {
        // Saving the service 
        var savedService = await newService.save();
        return savedService;
    } catch (e) {
        // return a Error message describing the reason   
        console.log(e)
        throw Error("Error while Creating service")
    }
};

// Async function to update a new service
exports.updateService = async function (service) {
    var id = service.id
    try {
        //Find the old service Object by the Id
        var oldService = await Service.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the service")
    }
    // If no old service Object exists return false
    if (!oldService) {
        return false;
    }
    console.log(oldService)
    //Edit the service Object
    oldService.name = service.name;
    oldService.description = service.description;
    oldService.price = service.price;
    oldService.image = service.image;
    oldService.state = service.state;
    oldService.frecuency = service.frecuency;
    oldService.duration = service.duration;
    oldService.category = service.category;
    console.log(oldService)
    try {
        var savedService = await oldService.save()
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
        var deleted = await Service.remove({ _id: id })
        if (deleted.result.n === 0) {
            throw Error("service Could not be deleted")
        }
        return deleted
    } catch (e) {
        console.log(e)
        throw Error("Error Occured while Deleting the service")
    }
}


// Async function to Unpublish Service
exports.unpublishService = async function (id) {
    try {
        // Find the service by ID
        let service = await Service.findById(id);
        // Check if the service exists
        if (!service) {
            throw Error('Service not found');
        }
        // Update the state to "Unpublish"
        service.state = "Unpublish";
        // Save the updated service
        let savedService = await service.save();

        return savedService;
    } catch (e) {
        console.log(e)
        throw Error("Error Occured while unpublishing the service")
    }
}


