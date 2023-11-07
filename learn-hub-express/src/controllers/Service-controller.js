
const Service = require('../services/Service-service');

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.getService();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single service
exports.getServiceByUser = async (req, res) => {
  try {
    const service = await Service.getServiceByUser(req.body);
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new service
exports.createService = async (req, res) => {
  const service = new Service({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    date: new Date(),
    image: req.body.image,
    state: req.body.state,
    frecuency: req.body.frecuency,
    duration: req.body.duration,
    category: req.body.category,
  });

  try {
    const newService = await service.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  try {
    const service = await Service.updateService(req.body);
    res.status(200).json(service);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.deleteService(req.body)// deberia ser un id
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
