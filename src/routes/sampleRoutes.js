/**
 *
 * @swagger
 * tags:
 *  name: Samples
 *  description: Endpoint for sample api
 */
const sampleRoutes = require("express").Router();
const sampleController = require('../controllers/sampleController');

/**
 * @swagger
 *
 * /api/samples/:
 *  get:
 *      tags:
 *      - Samples
 *      summary: "Simple response to illustrate how swagger authentication works"
 *      description: "The endpoint returns a simple json object"
 *      produces:
 *          -application/json
 *      responses:
 *          200:
 *              description: "Success"
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                      example:
 *                       "message": "Hello there"
 */
sampleRoutes.get('/',sampleController.getSamples);
module.exports = sampleRoutes;