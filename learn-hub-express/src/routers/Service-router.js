const express = require('express');
const router = express.Router();
const Service_controller = require('../controllers/Service-controller');


//Service Router
/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('Llegaste a la ruta de  api/service-router');
// });
router.get('/allServices',  Service_controller.getAllServices); //Get all the services


module.exports = router;
