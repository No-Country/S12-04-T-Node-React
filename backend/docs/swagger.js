const swaggerJsdoc = require('swagger-jsdoc')

/**
 * API Config Info
 */

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Documentacion Chef GPT',
    version: '1.0.3'
  },
  servers: [
    {
      url: 'http://localhost:4000/api'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    },
    schemas: {
      authLogin: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      authRegister: {
        type: 'object',
        required: ['email', 'password', 'username'],
        properties: {
          name: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      recipe: {
        type: 'object',
        required: ['name', 'description', 'ingredients', 'preparations'],
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          ingredients: {
            type: 'string'
          },
          preparations: {
            type: 'string'
          }
        }
      }
    }
  }
}

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js']
}

const openApiConfigration = swaggerJsdoc(options)

module.exports = openApiConfigration
