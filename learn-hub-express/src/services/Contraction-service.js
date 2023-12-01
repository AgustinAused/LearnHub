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
    let contractId = req.body.contractId;
    try {
        // Find the contract by ID
        let contract = await contracts.findById(contractId);
        // Check if the contract exists
        if (!contract) {
            throw Error('Contract not found');
        }
        contract.state = req.body.newState;
        const savedContract = await contract.save();

        const updatedService = await service.findByIdAndUpdate(
            req.body.serviceId,
            { $pull: { hiring: contractId } },
            { new: true }
        );

        updatedService.hiring.push(savedContract._id);
        const finalUpdatedService = await updatedService.save();

        const userId = updatedService.responsable;
        const updatedUser = await user.findByIdAndUpdate(
            userId,
            { $pull: { services: updatedService._id } },
            { new: true }
        );

        updatedUser.services.push(finalUpdatedService._id);
        await updatedUser.save();

        console.log("Estado cambiado exitosamente");

        return savedContract;
        
    } catch (e) {
        // Handle errors and throw an error message
        console.error(e);
        throw Error("Error while changing status");
    }
}

