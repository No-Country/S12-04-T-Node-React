const { check } = require("express-validator");
const validateResults = require("../utils/handlerValidator")

const validatorCreateRecipe = [
    check("name")
    .exists()
    .notEmpty(),
    check("description")
    .exists()
    .notEmpty(),
    check("ingredients")
    .exists()
    .notEmpty(),
    check("preparations")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


const validatorGetRecipe = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = { validatorCreateRecipe, validatorGetRecipe };