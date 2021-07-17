const{SERVER_URL, BASE_PATH, API_PORT, HTTP_PROTOCOL} = require('./serverConfig');
const host = `${HTTP_PROTOCOL}${SERVER_URL}:${API_PORT}` || 'localhost:3001';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Sample API',
        description: '',
        version: '1.0.0',
        contact: {
            email: 'hksalaudeen@gmail.com'
        }
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
};

module.exports = {
    swaggerDefinition,
    host,
    basePath: BASE_PATH,
    apis: [
        'src/routes/*.js'
    ]
}