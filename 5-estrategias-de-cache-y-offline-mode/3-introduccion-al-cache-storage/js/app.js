if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/pwa-training/5-estrategias-de-cache-y-offline-mode/3-introduccion-al-cache-storage/sw.js')
}

// Verificar si podemos utilizar el cache
if (window.caches) {
    // Open: intenta acceder al espacio en el disco duro con el nombre dado,
    // si este no existe entonces crea uno
    caches.open('prueba-1')
    caches.open('prueba-2')

    // Verificar si existe el cache
    // caches.has('prueba-2')
    //     .then(console.log)

    // Borrar un cache específico
    // caches.delete('prueba-1').then(console.log)

    caches.open('cache-v1.1')
        .then(cache => {
            // Añadir un archivo de manera manual al cache
            // cache.add('/index.html')

            // Añadir varios archivos de manera manual al cache
            cache.addAll([
                'index.html',
                'css/style.css',
                'img/main.jpg'
            ]).then(() => {
                // Borramos información del cache que hemos obtenido al hacer el open
                // cache.delete('css/style.css')

                // Reemplazar un archivo existente por otro
                cache.put('index.html', new Response('Hola Mundo'))
            })

            // Obtener un archivo del cache
            // cache.match('index.html')
            //     .then(res => {
            //         // La respuesta puede ser el archivo o puede ser undefined
            //         res.text().then(console.log)
            //     })
        })

    // Obtener todos los caches
    caches.keys().then(keys => {
        console.log(keys)
    })
}