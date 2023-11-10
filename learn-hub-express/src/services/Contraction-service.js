const contracts = require('../database/models/Contrataciones');
const user = require('../database/models/Usuario');
const service = require('../database/models/Servicio');


// Saving the context of this module inside the _the variable
_this = this

// Async function to get the contract list by user 
exports.getContractsByUser = async function (id) {
    try {
        var contractsByUser = await contracts.find({ usuario: id });
        return contractsByUser;
    } catch (e) {
        throw Error('Error while Paginating Contracts by User');
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
        var contract = await contracts.findById(body.id);
        contract.state = body.status;
        var savedContract = await contract.save();
        return savedContract;
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Changing Status")
    }
}

