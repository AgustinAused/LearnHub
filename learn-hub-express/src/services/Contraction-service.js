const contracts = require('../database/models/Contrataciones');
const user = require('../database/models/Usuario');
const service = require('../database/models/Servicio');
const Servicio = require('../database/models/Servicio');


// Saving the context of this module inside the _the variable
_this = this

// Async function to get the contract list by user 
exports.getContractsByUser = async function (id) {
    try {
        const serviceList = await Servicio.find({ _id: id }).populate('hiring');
        console.log("serviceList", serviceList);
        // Inicializar la lista de contratos
        let contractsList = serviceList[0].hiring;
        console.log("contractsList", contractsList);

        // Devolver la lista de contratos
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
    console.log(req.body);
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
            { $push: { hiring: savedContract._id, ref: 'Contrataciones' } });
       
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
exports.changeStatus = async function (req) {
    //serviceId req inm query
    // let contractId = req.query.Id;
    try {
        // Find the contract by ID
        let contract = await contracts.findById(contractId);
        // Check if the contract exists
        if (!contract) {
            throw Error('Contract not found');
        }
        // Update the state of the contract
        contract.state = body.state;
        // Save the updated contract
        let savedContract = await contract.save();

        
        
        // console.log(updatedUser);
        console.log("State change successfully");
        // Return the saved contract
        return savedContract;
    } catch (e) {
        // Handle errors and throw an error message
        console.error(e);
        throw Error("Error while changing status");
    }
}

