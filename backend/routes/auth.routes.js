const express = require('express')
const authRouter = express.Router()

const { validatorLogin } = require('../validators/auth')

const { loginUser } = require('../controllers/auth.controller')

/**
 * Login user
 * @openapi
 * /auth:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Login user"
 *      description: Iniciar session a un nuevo usuario y obtener el token de sesión
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/authLogin"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
authRouter.post('/auth', validatorLogin, loginUser)

module.exports = authRouter
