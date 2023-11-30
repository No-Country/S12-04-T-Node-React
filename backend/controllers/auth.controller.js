const bcrypt = require('bcryptjs')
const User = require('../models/users.model')
const { matchedData } = require('express-validator')
const { generateToken } = require('../utils/jwt')

async function loginUser(req, res) {
  const result = matchedData(req)
  const { email, password } = result
  const emailParsed = email.toLowerCase()

  try {
    const user = await User.findOne({ emailParsed })

    if (!user) {
      return res.status(301).json({
        errors: { msg: 'Email o contraseña incorrectos' }
      })
    }

    const passValidated = bcrypt.compareSync(password, user.password)
    if (!passValidated) {
      return res.status(301).json({
        errors: { msg: 'Email o contraseña incorrectos' }
      })
    }

    const token = await generateToken(user.uid)

    return res.status(200).json({
      data: { firstname: user.firstname, lastname: user.lastname, token }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: true, data: { message: 'Error Interno' } })
  }
}
async function validateToken() {}

module.exports = { loginUser, validateToken }
