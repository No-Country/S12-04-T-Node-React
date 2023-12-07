const Recipe = require('../models/recipes.model')
const { handleError } = require('../utils/handlerError')
const { matchedData } = require('express-validator')

const getAllRecipe = async(req, res) => {
    try {
        const user = req.user
        const data = await Recipe.findAllData({})
        res.send({data, user})
    } catch (error) {
        handleError(res, "Error Get Recipes")
    }
}

const getRecipeById = async(req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await Recipe.findOneData(id)
        res.send({data})
    } catch (error) {
        handleError(res, "Error Get Recipe")
    }
}

const createRecipe = async(req, res) => {
    try {
        const body = matchedData(req)
        const data = await Recipe.create(body)
        res.status(201)
        res.send({data})
    } catch (error) {
        handleError(res, "Error Save Recipes")
    }
}

const deleteRecipe = async(req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const deleteRes = await Recipe.delete({ _id: id })
        const data = { deleted: deleteRes.matchedCount }
        res.send({data})
    } catch (error) {
        handleError(res, "Error Delete Recipe")
    }
}


module.exports = {
    createRecipe,
    getAllRecipe,
    getRecipeById,
    deleteRecipe
}