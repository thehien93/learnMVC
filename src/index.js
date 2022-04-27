const express = require('express')
const { engine } = require('express-handlebars');
const { get } = require('http');
const morgan = require('morgan')
const path =require('path')
const route = require('./router')
const db = require('./config/db')

const app = express()
const port = 3000
app.use(morgan('combined'))

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, 'resource','views'));

route(app)

db.connect()
  app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })