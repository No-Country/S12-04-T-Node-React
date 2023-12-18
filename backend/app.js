require('dotenv').config()
const express = require('express')
const cors = require('cors')

const dbConnect = require('./config/mongo')
const firebase = require('firebase/app')
const firebaseConfig = require('./config/firebase')
firebase.initializeApp(firebaseConfig)
const multer = require('multer')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')
const recipeRouter = require('./routes/recipe.routes')
const swaggerUI = require('swagger-ui-express')
const openApiConfigration = require('./docs/swagger')

dbConnect()
const upload = multer({ storage: multer.memoryStorage() })

const port = process.env.PORT || 4500

const app = express()
app.use(cors())
app.use(express.json())

//docs
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfigration))

app.get('/', (req, res) => {
  res.send('chefGPT - API')
})

app.use('/api', authRouter)
app.use('/api/user', upload.single('filename'), userRouter)
app.use('/api/recipe', recipeRouter)

app.listen(port, () => {
  console.log(`server run ${port}`)
})
