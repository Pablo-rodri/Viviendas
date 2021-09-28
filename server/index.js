const express = require("express")
const app = express()
const path = require('path')

//conexion a base de datos
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/viviendas'
mongoose.connect(uri);

app.use(express.static(path.join(__dirname, "public")))

app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

const House = require('./../server/model/house.model')

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/viviendasjson', (req, res) => {
  console.log('viviendasjson')
  House
    .find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Internal Server Error', err }))
})

app.get('/viviendas', (req, res) => {
  console.log('viviendas')
  House
    .find()
    .then(houses => res.render('viviendas', { houses: houses }))
    .catch(err => res.status(500).json({ code: 500, message: 'Internal Server Error', err }))
})

app.listen(3000, () => {
  console.log("servidor en 3000")
})
