const CACHE_NAME = 'cache-1'

self.addEventListener('install', e => {
    const appShell = caches.open(CACHE_NAME)
        .then(cache => {
            // Agregar App Shell
            return cache.addAll([
                '/pwa-training/5-estrategias-de-cache-y-offline-mode/6-cache-with-network-fallback/',
                'index.html',
                'css/style.css',
                'img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                'js/app.js'
            ])
        })

    // Debemos poner el waitUntil para esperar la resolución de la promesa,
    // ya que el evento install se ejecuta más rapido. Si ocuparamos obtener
    // alguna información que tenemos del cache-1 en otro listener fallaría si no
    // ponemos el waitUntil
    e.waitUntil(appShell)
})

self.addEventListener('fetch', e => {
    // 1- Cache Only: Esta es usado cuando queremos que toda la
    // aplicación sea servida desde el cache, no vamos a Internet.
    // chaches.match busca en todos los cache disponibles en el dominio de
    // nuestra aplicación y retorna la información solicitada.
    // e.respondWith(caches.match(e.request))

    // 2- Cache with Network fallback: Intenta primero obtener los recursos
    // desde el cache, si no los encuentra entonces accede a internet
    const respuesta = caches.match(e.request)
        .then(res => {
            if (res) return res

            // No existe el recurso solicitado en el cache, entonces hacemos
            // la solicitud a internet
            console.log('No existe', e.request.url)

            return fetch(e.request).then(newResp => {
                // Almacenar la nueva respuesta en el cache
                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(e.request, newResp)
                    })

                return newResp.clone()
            })
        })

    e.respondWith(respuesta)
})