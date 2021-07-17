const routes = require("express").Router();
// import routes
const sampleRoutes = require("./sampleRoutes");
const authRoutes = require("./authRoutes");

routes.use('/samples', sampleRoutes);
routes.use('/auth', authRoutes);

module.exports = routes;