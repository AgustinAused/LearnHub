const contracts = require('../database/models/Contrataciones');
const user = require('../database/models/Usuario');
const service = require('../database/models/Servicio');


// Saving the context of this module inside the _the variable
_this = this

// Async function to get the contract list by user 
exports.getContractsByUser = async function (id) {
    try {
        var userContract = await user.findById(id);
        var contractsList = [];
        for (let i = 0; i < userContract.services.length; i++) {
            var serviceContract = await service.findById(userContract.services[i]);
            for (let j = 0; j < serviceContract.hiring.length; j++) {
                var contract = await contracts.findById(serviceContract.hiring[j]);
                contractsList.push(contract);
            }
        }
        return contractsList;
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Paginating Contracts")
    }
}


// Async function to create contract 
exports.createContraction = async function (req) {
    //extrat de user id param
    let serviceId = req.body.serviceId;

    console.log("serviceId", serviceId);
    console.log("contract", req.body);
    
    // Creating a new Mongoose Object by using the new keyword
    
    var newContract = new contracts({
        // serviceType: req.body.serviceType,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        telephone: req.body.telephone,
        hour: req.body.preferenceTimeforContact,
        message: req.body.message,
        totalCost: req.body.price,
        serviceType: req.body.serviceType,
        state: "Requested",
    })
    console.log(newContract);
    try {
        // Saving the contract 
        var savedContract = await newContract.save();

        let updatedService = await Servicio.findByIdAndUpdate(
            serviceId,
            { $push: { hiring: savedContract._id, ref: 'Contrataciones' } },
            { new: true }
        );
        // Update user with the new service
        let updatedUser = await user.findByIdAndUpdate(
            { services: updatedService._id },
            { $addToSet: { services: updatedService._id, ref: 'Servicios' } },
            { new: true }
        );
        console.log(updatedService);
        console.log(updatedUser);
        return savedContract;
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Creating Contract")
    }
}

// Async function to change status 
exports.changeStatus = async function (body) {
    try {
        // Find the contract by ID
        var contract = await contracts.findById(body.id);
        // Check if the contract exists
        if (!contract) {
            throw Error('Contract not found');
        }
        // Update the state of the contract
        contract.state = body.status;
        // Save the updated contract
        var savedContract = await contract.save();

        // Return the saved contract
        return savedContract;
    } catch (e) {
        // Handle errors and throw an error message
        console.error(e);
        throw Error("Error while changing status");
    }
}

