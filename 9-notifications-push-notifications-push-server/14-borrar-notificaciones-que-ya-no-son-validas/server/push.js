const fs = require('fs')

const vapid = require('./vapid.json')
const URLSafeBase64 = require('urlsafe-base64')
const webpush = require('web-push')

webpush.setVapidDetails(
    'mailto:soporte@sistemasg2.com',
    vapid.publicKey,
    vapid.privateKey
);

let suscripciones = require('./subs-db.json');

module.exports.getKey = () => {
    return URLSafeBase64.decode(vapid.publicKey)
}

module.exports.addSubscription = (subscripcion) => {
    suscripciones.push(subscripcion)
    fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones))
}

module.exports.sendPush = (post) => {
    console.log('Mandando Push')

    let notificacionesEnviadas = []

    suscripciones.forEach((suscripcion, i) => {
        const pushProm = webpush.sendNotification(suscripcion, JSON.stringify(post))
            .then(console.log('Notificación enviada'))
            .catch(err => {
                console.log('Notificacion falló')

                if (err.statusCode === 410) { // Gone, ya no existe
                    suscripciones[i].borrar = true
                }
            })
        
        notificacionesEnviadas.push(pushProm)
    })

    Promise.all(notificacionesEnviadas).then(() => {
        suscripciones = suscripciones.filter(subs => !subs.borrar)

        fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones))
    })
}