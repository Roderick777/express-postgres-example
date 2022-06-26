const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const apiRouter = require('./routes/api')
const app = express()

app.use(cors({ origin: '*' }))
app.use(logger('dev'))
app.use(express.json())
app.use('/api', apiRouter)

app.listen(3000, () => {
  console.log(`Servidor Corriendo ${3000}`)
})