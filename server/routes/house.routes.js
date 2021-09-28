const express = require('express')
const router = express.Router()

const House = require('./../model/house.model')


router.get('/viviendasjson', (req, res) => {
    console.log('viviendas')
    House
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Internal Server Error', err }))
})


module.exports = router

