// La palabra self hace referencia al sw
self.addEventListener('fetch', event => {

    // Si la solicitud del evento es a un archivo que incluye el
    // texto style.css vamos a modificar su respuesta para que
    // esta sea nula o no encontrada
    if (event.request.url.includes('style.css')) {
        event.respondWith(null)
    } else {
        // La respuesta del evento va a ser la misma solcitud
        // que está haciendo el evento
        event.respondWith( fetch(event.request) )
    }
})
