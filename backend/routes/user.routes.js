const express = require('express')
const userRouter = express.Router()
const multer = require('multer')
const { validatorRegister } = require('../validators/auth')
const {
  createUser,
  editUser,
  deleteUser
} = require('../controllers/user.controller')

/**
 * Register New User
 * @openapi
 * /register:
 *    post:
 *        tags:
 *            - auth
 *        summary: "Registrar nuevo usuario"
 *        description: "Esta ruta es para registrar nuevo usuario"
 *        requestBody:
 *            content:
 *                application/json:
 *                    schema:
 *                        $ref: "#/components/schemas/authRegister"
 *        responses:
 *            '201':
 *                description: "Usuario Registrado de manera Exitosa"
 *            '403':
 *                description: "Error, Usuario No Registrado"
 */
userRouter.post('/register', validatorRegister, createUser)
userRouter.post('/edit', validatorRegister, editUser)
userRouter.post('/delete', validatorRegister, deleteUser)

module.exports = userRouter
