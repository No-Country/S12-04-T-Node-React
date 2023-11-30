require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const dbConnect = require('./config/mongo')

const port = process.env.PORT || 4500

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Express Server')
})

app.use("/api", routes)

app.listen(port, () => {
  (console.log(`server run ${port}`))
}
)

dbConnect()
