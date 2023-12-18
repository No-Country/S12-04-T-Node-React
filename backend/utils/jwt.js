const jwt = require('jsonwebtoken')

const generateToken = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid }
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES },
      (err, token) => {
        if (err) {
          reject({
            error: true,
            message: 'No se pudo generar el token adecuadamente'
          })
        }
        resolve(token)
      }
    )
  })
}

module.exports = { generateToken }
