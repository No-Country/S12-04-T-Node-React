const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    const DB_URI = await process.env.DB_URI
    await mongoose.connect(DB_URI)
    console.log('Successful Connection Database')
  } catch (error) {
    console.log('Database Connection Error')
  }
}

module.exports = dbConnect
