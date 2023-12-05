const Crypto = require('crypto')
const bcrypt = require('bcryptjs')
const User = require('../models/users.model')
const { matchedData } = require('express-validator')
const { generateToken } = require('../utils/jwt')

async function createUser(req, res) {
  const result = matchedData(req)

  const { email, password } = result

  try {
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({ errors: { msg: 'Email ya utilizado' } })
    }

    user = new User(result)

    user.uid = Crypto.randomUUID()
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)
    user.email = email.toLowerCase()

    await user.save()

    const token = await generateToken(user.uid)

    res.status(201).json({
      data: {
        uid: user.uid,
        username: user.username,
        token
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: { msg: 'Error Interno', error } })
  }
}
async function editUser() {}
async function deleteUser() {}

module.exports = { createUser, editUser, deleteUser }
