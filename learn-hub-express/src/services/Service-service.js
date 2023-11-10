let Service = require('../database/models/Servicio');
let usuario = require('../database/models/Usuario');


// Saving the context of this module inside the _the variable
let _this = this

// Async function to get the service list
exports.getService = async function(){
    try {
        let service = await Service.find({});
        // Return the serviced list that was retured by the mongoose promise
        return service;
    } catch (e) {
        // return a Error message describing the reason
        console.log(e)
        throw Error('Error while getting service')
    }
}

// Async function to get the service by user
exports.getServiceByUser = async function(user){
    let services = []
    try{
        // Find the user 
        console.log("login:",user);
        let _user = await usuario.findOne({name:user.name});
        console.log(_user)
        // Get the service list 
        services = _user.servicios;
        // Return the service list that was retured by the mongoose promise
        return services;
    } catch(e){
        // return a Error message describing the reason
        console.log(e)     
        throw Error('Error while getting service');
    }
};

// Async function to add a new service
exports.createService = async function(service){
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
    try{
        // Saving the service 
        var savedService = await newService.save();
        return savedService;
    }catch(e){
        // return a Error message describing the reason   
        console.log(e)  
        throw Error("Error while Creating service")
    }
};

// Async function to update a new service
exports.updateService = async function(service){
    var id = service.id
    try{
        //Find the old service Object by the Id
        var oldService = await Service.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the service")
    }
    // If no old service Object exists return false
    if(!oldService){
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
    try{
        var savedService = await oldService.save()
        return savedService;
    }catch(e){
        console.log(e);
        throw Error("And Error occured while updating the service");
    }
};


// Async function to delete a service
exports.deleteService = async function(id){
    // Delete the service
    try{
        var deleted = await Service.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("service Could not be deleted")
        }
        return deleted
    }catch(e){
        console.log(e)
        throw Error("Error Occured while Deleting the service")
    }
}


// Async function to Unpublish Service
exports.unpublishService = async function(id){
    try{
        let sevedService = await Service.updateOne({_id: id})
        savedService.state = "Unpublish";
        // saving service 
        let savedService = await savedService.save();
        return savedService;
    }catch(e){
        console.log(e)
        throw Error("Error Occured while unpublishing the service")
    }
}


