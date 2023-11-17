
const express = require('express');
const router = express.Router();
const contractionController = require('../controllers/Contraction-controller');
const Authentication = require('../auth/authentication');

//lisenig
router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/contraction-router');
});

// Get all contractions
router.get('/all',Authentication, contractionController.getAllContractions);
// Create new contraction
router.post('/new', contractionController.createContraction);
// Change status
router.put('/changeStatus', Authentication, contractionController.changeStatus);

module.exports = router;
