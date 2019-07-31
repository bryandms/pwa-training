// Ciclo de vida del SW
// Evento de instalción, por lo general en este evento se descargan
// assets que componen la aplicación y se crea el caché
self.addEventListener('install', event => {
    console.log('SW: Instalando SW')

    const instalacion = new Promise((resolve, reject) => {
        // Simulación de instalación del SW
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas')

            // Instala y activa el nuevo SW sin necesidad de que el cliente
            // tenga que cerrar todos los tabs activos de la app, sin embargo
            // no es recomendable
            self.skipWaiting()

            resolve()
        }, 1)
    })

    event.waitUntil(instalacion)
})

// Evento de activación, este sucede cuando el SW toma
// el control de la aplicación. Por lo general dentro de
// este evento se borra el caché viejo
self.addEventListener('activate', event => {
    console.log('SW: Activado y listo para controlar el app')
})

// Evento Fetch: Manejo de peticiones HTTP
// Por lo general se aplican las estrategias del caché
self.addEventListener('fetch', event => {
    
    console.log('SW: ', event.request.url)

    if (event.request.url.includes('https://reqres.in/api/users')) {
        const resp = new Response(`{ ok: false, mensaje: 'mensaje' }`)
        event.respondWith(resp)
    }

})
