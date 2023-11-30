require('dotenv').config()
const express = require('express')
const cors = require('cors')

const dbConnect = require('./config/mongo')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')

dbConnect()
const port = process.env.PORT || 4500

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('chefGPT - API')
})

app.use('/api', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
  console.log(`server run ${port}`)
})
