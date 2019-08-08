// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();

const mensajes = [
  {
    _id: 'aaa',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }
];

// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json(mensajes);
});

// Post mensaje
router.post('/', function (req, res) {
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push(mensaje);

  console.log(mensajes)

  res.json({
    ok: true,
    mensaje
  });
});

// Almacenar subscripción
router.post('/subscribe', (req, res) => {
  res.json('subscribe')
})

// Obtener key público
router.get('/key', (req, res) => {
  res.json('key público')
})

// Enviar notificación push a las personas que nosotros queramos
// Normalmente esto se controla desde el servidor y no por un servicio rest
router.post('/push', (req, res) => {
  res.json('push')
})

module.exports = router;