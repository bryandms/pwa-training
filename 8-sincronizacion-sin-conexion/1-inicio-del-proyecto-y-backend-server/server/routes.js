// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();

const mensajes = [
  {
    _id: 'aaa',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  },
  {
    _id: 'aaa',
    user: 'ironman',
    mensaje: 'Hola Mundo'
  }
];

// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json(mensajes);
});

module.exports = router;