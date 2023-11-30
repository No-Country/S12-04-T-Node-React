const Crypto = require('crypto')
const bcrypt = require('bcryptjs')
const User = require('../models/users.model')
const { matchedData } = require('express-validator')
const { generateToken } = require('../utils/jwt')

async function createUser(req, res) {
  const result = matchedData(req)

  const { email, password } = result

  const emailParsed = email.toLowerCase()

  try {
    let user = await User.findOne({ emailParsed })

    if (user) {
      return res.status(400).json({ errors: { msg: 'Email ya utilizado' } })
    }

    user = new User(result)

    user.uid = Crypto.randomUUID()
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    const token = await generateToken(user.uid)

    res.status(201).json({
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        token
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: { msg: 'Error Interno', error } })
  }

  //   user = new User(result)

  //   user.uid = Crypto.randomUUID()
  //   const salt = bcrypt.genSaltSync()
  //   user.password = bcrypt.hashSync(password, salt)

  //   await user.save()

  //   const token = await generateToken(user.uid, user.firstname, user.lastname)
  //   return {
  //     error: false,
  //     data: {
  //       // uid: user.uid,
  //       firstname: user.firstname,
  //       lastname: user.lastname,
  //       // email: user.email,
  //       token
  //     }
  //   }
}
async function editUser() {}
async function deleteUser() {}

module.exports = { createUser, editUser, deleteUser }
