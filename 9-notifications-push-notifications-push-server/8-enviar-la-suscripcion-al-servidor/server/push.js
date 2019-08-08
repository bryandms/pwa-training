const vapid = require('./vapid.json')
const URLSafeBase64 = require('urlsafe-base64')

const suscripciones = [];

module.exports.getKey = () => {
    return URLSafeBase64.decode(vapid.publicKey)
}

module.exports.addSubscription = (subscripcion) => {
    suscripciones.push(subscripcion)

    console.log(suscripciones)
}