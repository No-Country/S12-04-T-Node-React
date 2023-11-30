const express = require('express')
const userRouter = express.Router()

const { validatorRegister } = require('../validators/auth')
const {
  createUser,
  editUser,
  deleteUser
} = require('../controllers/user.controller')

userRouter.post('/register', validatorRegister, createUser)
userRouter.post('/edit', validatorRegister, editUser)
userRouter.post('/delete', validatorRegister, deleteUser)

module.exports = userRouter
