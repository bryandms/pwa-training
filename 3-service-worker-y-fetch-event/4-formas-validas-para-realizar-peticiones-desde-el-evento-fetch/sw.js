// La palabra self hace referencia al sw
self.addEventListener('fetch', event => {

    // Consultamos si la petición contiene la extensión o el
    // texto .jpg
    if (event.request.url.includes('.jpg')) {
        console.log(event.request.url)

        // Formas válidas de realizar peticiones
        // let fotoReq = fetch('img/main.jpg')
        // let fotoReq = fetch(event.request.url)
        let fotoReq = fetch(event.request)

        event.respondWith(fotoReq)
    }

})
