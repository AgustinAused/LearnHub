const contracts = require('../database/models/Contrataciones');
const user = require('../database/models/Usuario');
const service = require('../database/models/Servicio');


// Saving the context of this module inside the _the variable
_this = this

// Async function to get the contract list by user 
exports.getContractsByUser = async function (id) {
    try {
        const userContract = await user.findById(id).populate('services');
        
        const contractsList = [];

        for (const serviceContract of userContract.services) {
            const contractsOfService = await contracts.find({ _id: { $in: serviceContract.hiring } });
            contractsList.push(...contractsOfService);
        }

        return contractsList;
    } catch (e) {
        console.error(e);
        throw Error("Error while Retrieving Contracts");
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

        let updatedService = await service.findByIdAndUpdate(
            // Find the service by ID
            {_id: serviceId},
            { $push: { hiring: savedContract._id, ref: 'Contrataciones' } },
            { new: true }
        );
        let userId = updatedService.responsable;
        // let userr = await user.findOne({ _id: userId });
        let updatedUser = await user.findByIdAndUpdate(
            {_id: userId},
            { $set: { services: updatedService._id , ref: 'Servicio' } },
            { new: true }
        );

        console.log("userId", userId);
        // Update user with the new service
        // console.log(updatedService);
        // console.log(updatedUser);??
        return savedContract;
    } catch (e) {
        // return a Error message describing the reason 
        console.error(e);    
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

