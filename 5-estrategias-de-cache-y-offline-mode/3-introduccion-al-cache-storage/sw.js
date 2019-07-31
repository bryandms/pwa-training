// Detectar cuando no tenemos conexión o cuando esta falla
self.addEventListener('fetch', event => {
    // const offlineResponse = new Response(`
    //     <!DOCTYPE html>
    //     <html lang="en">
        
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //         <title>Estrategias de cache y offline mode - Respuesta offline HTML String</title>
    //     </head>
        
    //     <body class="container p-3">
    //         <h1>Offline Mode</h1>
    //     </body>

    //     </html>
    // `, {
    //     headers: {
    //         'Content-Type': 'text/html'
    //     }
    // })

    const offlineResponse = fetch('pages/offline.html')

    const respuesta = fetch(event.request)
        .catch(() => offlineResponse)

    event.respondWith(respuesta)
})