const express = require('express')
const router = express.Router()

const { validatorRegister } = require('../validators/auth')
const { matchedData } = require('express-validator')

router.post('/register', validatorRegister, (req, res) => {
  req = matchedData(req)
  res.send({ data: req })
})

module.exports = router
