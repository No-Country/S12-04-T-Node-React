const { model, Schema } = require('mongoose')

const RecipeScheme = Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    ingredients: {
      type: [String],
      required: true
    },
    preparations: {
        type: [String],
        required: true
      }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('recipes', RecipeScheme)
