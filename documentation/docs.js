
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')



const apiDocs = {

      definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'social media api '
    },
    servers: [
      {
        url: 'http://localhost:4549',
        description: 'Development server'
      }
    ]
  }

}

const swaggerDoc = swaggerJsDoc(apiDocs)


module.exports = swaggerDoc