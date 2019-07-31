const CACHE_STATIC_NAME = 'static-v5'
const CACHE_DYNAMIC_NAME = 'dynamic-v1'
const CACHE_INMUTABLE = 'inmutable-v1'
const CACHE_DYNAMIC_LIMIT = 50

/**
 * Función para limpiar el cache y limitar el cache
 * 
 * @param {*} cacheName   nombre del cache que se va a limpiar
 * @param {*} numeroItems número del límite de item a mantener en el cache
 */
function limpiarCache(cacheName, numeroItems) {
    caches.open(cacheName)
        .then(cache => {
            return cache.keys()
                .then(keys => {
                    if (keys.length > numeroItems) {
                        cache.delete( keys[0] )
                            .then( limpiarCache(cacheName, numeroItems) )
                    }
                })
        })
}

self.addEventListener('install', e => {
    const appShell = caches.open(CACHE_STATIC_NAME)
        .then(cache => {
            return cache.addAll([
                '/pwa-training/5-estrategias-de-cache-y-offline-mode/13-mostrar-pagina-offline-si-no-existe-la-peticion-en-cache/',
                'index.html',
                'pages/offline.html',
                'css/style.css',
                'img/main.jpg',
                'js/app.js',
                'img/no-img.jpg',
            ])
        })

    const cacheInmutable = caches.open(CACHE_INMUTABLE)
        .then(cache => {
            return cache.addAll([
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
            ])
        })

    e.waitUntil( Promise.all([appShell, cacheInmutable]) )
})

self.addEventListener('activate', e => {
    const respuesta = caches.keys().then(keys => {
        keys.forEach(key => {
            if (key !== CACHE_STATIC_NAME && key.includes('static')) {
                return caches.delete(key)
            }
        })
    })

    e.waitUntil(respuesta)
})

self.addEventListener('fetch', e => {
    // Cache with Network fallback
    const respuesta = caches.match(e.request)
        .then(res => {
            if (res) return res

            return fetch(e.request).then(newResp => {
                // Almacenar la nueva respuesta en el cache
                caches.open(CACHE_DYNAMIC_NAME)
                    .then(cache => {
                        cache.put(e.request, newResp)
                        limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT)
                    })

                return newResp.clone()
            })
            .catch(err => {
                // Detectamos si se está solicitando una página html
                if (e.request.headers.get('accept').includes('text/html'))
                    return caches.match('pages/offline.html')
            })
        })

    e.respondWith(respuesta)
})