const express = require('express');
const router = express.Router();
// (GET) home page router
router.get('/', (req, res,next) => {
  res.send('Bienvenido a la página de inicio');
});

module.exports = router;
