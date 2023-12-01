const contraction = require('../services/Contraction-service');
// const jwt = require('jsonwebtoken');


// Get all contractions by service
exports.getAllContractions = async (req, res) => {
  try {
    let id = req.query.serviceId;
    console.log(id);
    const contractions = await contraction.getContractsByUser(decoded.id); //id
    res.status(200).json(contractions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new contraction
exports.createContraction = async (req, res) => {
  try {
    const newContraction = await contraction.createContraction(req); // cuerpo completo de 
    res.status(201).json(newContraction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Change status
exports.changeStatus = async (req, res) => {
  try {
    const newStatus = await contraction.changeStatus(req); 
    res.status(201).json(newStatus);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

