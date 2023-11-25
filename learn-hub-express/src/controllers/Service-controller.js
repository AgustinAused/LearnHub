
const Service = require('../services/Service-service');

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.getService(req);
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single service by User
exports.getServiceByUser = async (req, res) => {
  try {
    const service = await Service.getServiceByUser(req);
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.getServiceById(req.params.id);
    if (!service) {
      // Service not found
      return res.status(404).json({ message: 'Service not found' });
    }
    // Service found, respond with the service data
    res.status(200).json(service);
  } catch (err) {
    if (err.name === 'ValidationError') {
      // Handle validation errors
      return res.status(400).json({ message: 'Validation error', errors: err.errors });
    }
    // Other types of errors
    res.status(500).json({ message: err.message });
  }
};

// Create a new service
exports.createService = async (req, res) => {
  try {
    const service = await Service.createService(req);
    res.status(201).json(service);
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
    const service = await Service.deleteService(req)// deberia ser un id
    res.status(200).json({ message: 'Service deleted successfully', serviceEliminate : service });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Unpublish service
exports.unpublishService = async (req, res) => {
  try {
    const service = await Service.unpublishService(req.body)// deberia ser un id
    res.status(200).json({ message: 'Service unpublished successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
