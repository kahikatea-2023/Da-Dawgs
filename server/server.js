const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')

const routes = require('./routes/users')

const server = express()

// Public Folder
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', routes)

module.exports = server
