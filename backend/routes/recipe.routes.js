const express = require('express')
const recipeRouter = express.Router()

const {
  validatorCreateRecipe,
  validatorGetRecipe
} = require('../validators/recipe')
const {
  getAllRecipe,
  getRecipeById,
  createRecipe,
  deleteRecipe
} = require('../controllers/recipe.controller')

/**
 * Get all Recipes
 * @openapi
 * /getRecipe:
 *    get:
 *      tags:
 *        - recipes
 *      summary: "Listar Recetas"
 *      description: Obten todas las recetas guardadas por el usuario en sus favoritos
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna la listas de las recetas.
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/recipe'
 *        '422':
 *          description: Error de validacion.
 */
recipeRouter.get('/getRecipe', getAllRecipe)

/**
 * Register new recipe
 * @openapi
 * /saveRecipe:
 *    post:
 *      tags:
 *        - recipes
 *      summary: "Registar Nueva Receta"
 *      description: Registra una receta y obtener el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/recipe"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con estado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
recipeRouter.post('/saveRecipe', validatorCreateRecipe, createRecipe)

/**
 * Get recipe
 * @openapi
 * /recipes/{id}:
 *    get:
 *      tags:
 *        - recipes
 *      summary: "Detalle Receta"
 *      description: Obten el detalle de una Receta
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de receta a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la receta.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/recipe'
 *        '422':
 *          description: Error de validacion.
 */
recipeRouter.get('/recipes/:id', validatorGetRecipe, getRecipeById)

/**
 * Delete recipe
 * @openapi
 * /deleteRecipe/{id}:
 *    delete:
 *      tags:
 *        - recipes
 *      summary: "Eliminar Receta de favoritos"
 *      description: Elimiar el detalle de una Receta
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de receta a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la Receta.
 *        '422':
 *          description: Error de validacion.
 */
recipeRouter.delete('/deleteRecipe/:id', deleteRecipe)

module.exports = recipeRouter
