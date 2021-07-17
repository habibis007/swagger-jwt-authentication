const sampleRoutes = require("express").Router();
const sampleController = require('../controllers/sampleController');

sampleRoutes.get('/',sampleController.getSamples);
module.exports = sampleRoutes;