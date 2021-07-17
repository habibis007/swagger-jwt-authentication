const routes = require("express").Router();
// import routes
const sampleRoutes = require("./sampleRoutes");

routes.use('/samples', sampleRoutes);

module.exports = routes;