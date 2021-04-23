const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()


const fruitRoutes = require('./routes/fruits')
const holidayRoutes = require('./routes/holidays')

const dictionaryRoutes = require('./routes/dictionary')
const jokeRoutes = require('./routes/jokes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/holidays', holidayRoutes)
server.use('/api/v1/joke', jokeRoutes)
server.use('/api/v1/dictionary', dictionaryRoutes)

module.exports = server
