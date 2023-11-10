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
exports.createContraction = async function (contract) {
    // Creating a new Mongoose Object by using the new keyword
    var newContract = new contracts({
        serviceType: contract.serviceType,
        name: contract.name,
        lastName: contract.lastName,
        email: contract.email,
        telephone: contract.telephone,
        hour: contract.hour,
        message: contract.message,
        totalCost: contract.totalCost,
        state: contract.state,
    })
    try {
        // Saving the contract 
        var savedContract = await newContract.save();
        // Saving the contract in service
        var serviceContract = await service.findById(contract.ServiceId);
        serviceContract.hiring.push(savedContract);
        await serviceContract.save();
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

