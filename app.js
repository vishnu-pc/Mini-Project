const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')

const indexRouter = require('./routes/index')
const modelRouter = require('./routes/model')
const weightsRouter = require('./routes/weights')
const modelWeightsRouter = require('./routes/model.weights')
const server = require('./server')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
	sassMiddleware({
		src: path.join(__dirname, 'public'),
		dest: path.join(__dirname, 'public'),
		indentedSyntax: false, // true = .sass and false = .scss
		sourceMap: true,
	}),
)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/model.json', modelRouter)
app.use('/weights.bin', weightsRouter)
app.use('/model.weights.bin', modelWeightsRouter)

server.init()

module.exports = app
