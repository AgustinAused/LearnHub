const contraction = require('../services/Contraction-service');


// Get all contractions
exports.getAllContractions = async (req, res) => {
  try {
    let token = req.headers.Authorization;
    const decoded = jwt.verify(token, process.env.SECRET);


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
    const newStatus = await contraction.changeStatus(req.body); //id
    res.status(201).json(newStatus);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

