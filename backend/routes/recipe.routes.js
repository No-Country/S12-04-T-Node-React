const express = require('express')
const recipeRouter = express.Router()

const { validatorCreateRecipe, validatorGetRecipe } = require('../validators/recipe')
const { getAllRecipe, getRecipeById, createRecipe, deleteRecipe } = require('../controllers/recipe.controller')

recipeRouter.get('/getRecipe', getAllRecipe)
recipeRouter.post('/saveRecipe', validatorCreateRecipe,createRecipe)
recipeRouter.get('/recipes/:id', validatorGetRecipe ,getRecipeById )
recipeRouter.delete('/deleteRecipe/:id', deleteRecipe)

module.exports = recipeRouter