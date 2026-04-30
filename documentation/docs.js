
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require('swagger-ui-express')



const apiDocs = {

    definition: {
    openapi: '3.0.0',
    info: {
      title: 'My sm API',
      version: '1.0.0',
      description: 'Social media API '
    },
    servers: [
      {
        url: 'http://localhost:4549',
        description: 'Development server'
      }
    ]
  },
   apis: ['../routes/*.js', './server.js'], 

}

const swaggerDoc = swaggerJsDoc(apiDocs)


module.exports = swaggerDoc