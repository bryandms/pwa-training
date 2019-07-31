self.addEventListener('install', e => {
    const appShell = caches.open('cache-1')
        .then(cache => {
            // Agregar App Shell
            return cache.addAll([
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