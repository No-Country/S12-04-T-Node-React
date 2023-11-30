const { check } = require('express-validator')
const validateResults = require('../utils/handlerValidator')

const validatorRegister = [
  check('firstname').exists().notEmpty().isLength({ min: 3, max: 50 }), // revisar notas de qa US
  check('lastname').exists().notEmpty().isLength({ min: 3, max: 50 }), // revisar notas de qa US
  check('age').exists().notEmpty().isNumeric(),
  check('password')
    .exists()
    .notEmpty()
    .isAlphanumeric()
    .isLength({ min: 8, max: 16 }),
  check('email').exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorLogin = [
  check('email').exists().notEmpty().isEmail(),
  check('password')
    .exists()
    .notEmpty()
    .isAlphanumeric()
    .isLength({ min: 8, max: 16 }),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorRegister, validatorLogin }
