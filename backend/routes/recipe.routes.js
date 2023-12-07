const express = require('express')
const recipeRouter = express.Router()

const { validatorCreateRecipe, validatorGetRecipe } = require('../validators/recipe')
const { getAllRecipe, getRecipeById, createRecipe, deleteRecipe } = require('../controllers/recipe.controller')

userRouter.get('/recipes', getAllRecipe)
userRouter.post('/saveRecipe', validatorCreateRecipe,createRecipe)
userRouter.get('/recipes/:id', validatorGetRecipe ,getRecipeById )
userRouter.delete('/deleteRecipe/:id', deleteRecipe)

module.exports = recipeRouter