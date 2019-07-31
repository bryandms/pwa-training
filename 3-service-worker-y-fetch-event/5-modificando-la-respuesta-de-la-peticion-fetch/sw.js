// La palabra self hace referencia al sw
self.addEventListener('fetch', event => {

    // Interceptamos la petición que contenga style.css
    if (event.request.url.includes('style.css')) {
        // Creamos una nueva respuesta
        let respuesta = new Response(`
            body {
                background-color: #eee !important;
            }
        `, {
            headers: {
                'Content-Type': 'text/css'
            }
        })

        event.respondWith(respuesta)
    }

})
