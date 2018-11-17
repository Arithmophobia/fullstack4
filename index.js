const http = require('http')
const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })

morgan.token('data', function getData(req) {
  return req.data
})

function assignData(req, res, next) {
  req.data = JSON.stringify(req.body)
  next()
}

app.use(cors())
app.use(bodyParser.json())
// then save data in string
app.use(assignData)
// finally log data
app.use(morgan(':method :url :data :status :res[content-length] - :response-time ms'))
//const mongoUrl = 'mongodb://localhost/bloglist'
app.use('/api/blogs', blogsRouter)
app.use(middleware.error)

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})