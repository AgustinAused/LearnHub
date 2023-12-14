const express = require('express');
const router = express.Router();
const Service_controller = require('../controllers/Service-controller');
const Authentication = require('../auth/authentication')
const multer = require('multer');


const upload = multer({ storage: multer.memoryStorage() });


//Service Router
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/service/');
});
router.get('/allServices',  Service_controller.getAllServices); //Get all the services
router.get('/serviceUser',Authentication,  Service_controller.getServiceByUser); //Get a single service
router.get('/serviceById/:id',  Service_controller.getServiceById); //Get a single service
router.post('/createService', upload.single("image"),Authentication, Service_controller.createService); //Create a new service
router.put('/updateService',Authentication,  Service_controller.updateService); //Update a service
router.delete('/deleteService/:id',Authentication,  Service_controller.deleteService); //Delete a service
router.put('/unpublishService',Authentication,  Service_controller.unpublishService); //Unpublish a service
router.put('/publishService',Authentication,  Service_controller.publishService); //Publish a service






module.exports = router;
