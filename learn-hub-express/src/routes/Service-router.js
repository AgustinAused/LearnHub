const express = require('express');
const router = express.Router();


//Service Router
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/service-router');
});


module.exports = router;
