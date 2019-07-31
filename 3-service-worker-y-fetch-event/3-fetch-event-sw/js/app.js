// Verificar si podemos utilizar el service worker #1
// Para esto consultamos si existe el objeto serviceWorker dentro
// de navigator. Se puede escribir como la función #1 o #2
// if ('serviceWorker' in navigator) {
//     console.log('Podemo usar el serviceWorker')
// }

// Verificar si podemos utilizar el service worker #2
if (navigator.serviceWorker) {
    console.log('Podemos usar el serviceWorker')

    // Vamos a registrar el archivo del sw
    navigator.serviceWorker.register('/pwa-training/3-service-worker-y-fetch-event/3-fetch-event-sw/sw.js')
}

// ============================================================
//                          NOTA
// ============================================================
// El alcance del SW se define según el lugar donde este sea
// ubicado, ya que si lo ponemos dentro de la carpeta de js
// solo va tener alcance de los archivos que se encuentren en
// esa carpeta, por eso lo recomendable es ubicarlo en el
// directorio raíz de nuestra aplicación.