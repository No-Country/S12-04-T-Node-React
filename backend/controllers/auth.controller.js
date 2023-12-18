const bcrypt = require('bcryptjs')
const User = require('../models/users.model')
const { matchedData } = require('express-validator')
const { generateToken } = require('../utils/jwt')
const { handleError } = require('../utils/handlerError')

async function loginUser(req, res) {
  const result = matchedData(req)
  const { email, password } = result

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return handleError(res, 'Email o contraseña incorrectos', 401)
      // res.status(401).json({
      //   errors: { msg: 'Email o contraseña incorrectos' }
      // })
    }

    const passValidated = bcrypt.compareSync(password, user.password)
    if (!passValidated) {
      return handleError(res, 'Email o contraseña incorrectos', 401)
      // res.status(401).json({
      //   errors: { msg: 'Email o contraseña incorrectos' }
      // })
    }

    const token = await generateToken(user.uid)

    return res.status(200).json({
      data: {
        uid: user.uid,
        avatar: user.avatar,
        username: user.username,
        token
      }
    })
  } catch (error) {
    console.log(error)
    return handleError(res, 'Error Interno', 500)
    // res.status(500).json({ error: true, data: { message: 'Error Interno' } })
  }
}
async function validateToken() {}

module.exports = { loginUser, validateToken }
