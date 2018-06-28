const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express();
const session = require('express-session')

//Our middleware in use
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', require('./api'))

app.use((req,res,next) => {
    if(path.extname(req.path).length > 0) {
        res.status(404).end()
    } else {
    next()
    }
})

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '.', 'client', 'index.html'))
})

app.use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
  
  app.listen(3000, () => {
      console.log('Server is listening on port 3000!');
})

module.exports = app