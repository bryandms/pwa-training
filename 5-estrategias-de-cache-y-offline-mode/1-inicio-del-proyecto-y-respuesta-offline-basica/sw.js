// Detectar cuando no tenemos conexión o cuando esta falla
self.addEventListener('fetch', event => {
    const offlineResponse = new Response(`
        Bienvenido a mi página web

        Disculpa, pero para usarla, necesitas internet
    `)

    const respuesta = fetch(event.request)
        .catch(() => offlineResponse)

    event.respondWith(respuesta)
})