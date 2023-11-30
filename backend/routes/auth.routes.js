const express = require('express')
const authRouter = express.Router()

const { validatorLogin } = require('../validators/auth')

const { loginUser } = require('../controllers/auth.controller')

authRouter.post('/auth', validatorLogin, loginUser)

module.exports = authRouter
