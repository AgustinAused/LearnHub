const express = require('express');
const router = express.Router();



//User Router
const users = require('./User-router');
//Service Router 
const services = require('./Service-router');
//commets Router
const comments = require('./Comment-router');
//Contraction Router
const contractions = require('./Contraction-router');

//Use User router for api/users
router.use('/users', users);
//Use Service router for api/services
router.use('/services', services);
//Use Comment router for api/comments
router.use('/comments', comments);
//Use Contraction router for api/contractions
router.use('/contractions', contractions);


module.exports = router;