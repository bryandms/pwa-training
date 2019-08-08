// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push')

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
  const subscripcion = req.body
  
  push.addSubscription(subscripcion)

  res.json('subscribe')
})

// Obtener key público
router.get('/key', (req, res) => {
  const key = push.getKey()

  res.send(key)
})

// Enviar notificación push a las personas que nosotros queramos
// Normalmente esto se controla desde el servidor y no por un servicio rest
router.post('/push', (req, res) => {
  const post = {
    titulo: req.body.titulo,
    cuerpo: req.body.cuerpo,
    usuario: req.body.usuario
  }

  push.sendPush(post)
  res.json(post)
})

module.exports = router;