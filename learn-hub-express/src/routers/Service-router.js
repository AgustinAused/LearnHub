const express = require('express');
const router = express.Router();
const Service_controller = require('../controllers/Service-controller');
const Authentication = require('../auth/authentication')


//Service Router
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/service/');
});
router.get('/allServices',  Service_controller.getAllServices); //Get all the services
router.get('/serviceUser',  Service_controller.getServiceByUser); //Get a single service
router.get('/serviceById',  Service_controller.getServiceById); //Get a single service
router.post('/createService',Authentication,  Service_controller.createService); //Create a new service
router.put('/updateService',Authentication,  Service_controller.updateService); //Update a service
router.delete('/deleteService',Authentication,  Service_controller.deleteService); //Delete a service
router.put('/unpublishService',Authentication,  Service_controller.unpublishService); //Unpublish a service






module.exports = router;
