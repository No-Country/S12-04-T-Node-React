const { model, Schema } = require('mongoose')

const UserScheme = Schema(
  {
    uid: {
      index: true,
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('User', UserScheme)
