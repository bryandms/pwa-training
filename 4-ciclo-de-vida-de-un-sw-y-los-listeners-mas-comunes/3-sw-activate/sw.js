// Ciclo de vida del SW
// Evento de instalción, por lo general en este evento se descargan
// assets que componen la aplicación y se crea el caché
self.addEventListener('install', event => {
    console.log('SW: Instalando SW')

    // Instala y activa el nuevo SW sin necesidad de que el cliente
    // tenga que cerrar todos los tabs activos de la app, sin embargo
    // no es recomendable
    // self.skipWaiting()
})

// Evento de activación, este sucede cuando el SW toma
// el control de la aplicación. Por lo general dentro de
// este evento se borra el caché viejo
self.addEventListener('activate', event => {
    console.log('SW: Activado y listo para controlar el app')
})
