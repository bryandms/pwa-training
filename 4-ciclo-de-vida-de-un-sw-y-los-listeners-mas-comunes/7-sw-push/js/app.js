if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/pwa-training/4-ciclo-de-vida-de-un-sw-y-los-listeners-mas-comunes/7-sw-push/sw.js')
    .then(registro => {
    //   // Obtenemos el registro del SW, ahora vamos a realiazr un registro
    //   // de una tarea asíncrona cuando no hay conexión a internet
    //   setTimeout(() => {
    //     registro.sync.register('post-tag')
    //     console.log('Se envío un post al servidor')
    //   }, 3000)

      Notification.requestPermission().then(result => {
        console.log(result)
        registro.showNotification('Hola Mundo')
      })
    })
}
