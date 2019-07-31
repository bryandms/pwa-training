self.addEventListener('install', e => {
    const appShell = caches.open('cache-1')
        .then(cache => {
            // Agregar App Shell
            return cache.addAll([
                '/pwa-training/5-estrategias-de-cache-y-offline-mode/5-estrategia-cache-only/',
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
    e.respondWith(caches.match(e.request))
})