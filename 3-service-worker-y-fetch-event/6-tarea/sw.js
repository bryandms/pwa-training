self.addEventListener('fetch', event => {

    // Interceptamos la petición que contenga main.jpg
    if (event.request.url.includes('main.jpg')) {
        let respuesta = fetch('./img/main-patas-arriba.jpg')
        event.respondWith(respuesta)
    }

})
