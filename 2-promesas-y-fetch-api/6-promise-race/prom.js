// Función normal
function sumarLento(numero) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(numero + 1)
            // reject('Sumar lento falló')
        }, 800)
    })
}

// Función con ECMAScript6
let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(numero + 1)
            reject('Error en sumarRapido')
        }, 300)
    })
}

// Este método pone a competir a los argumentos del arreglo,
// el que se ejecute primero es el resultado, en caso de que
// ambas se resuelvan al mismo tiempo la respuesta será el
// primer argumento. En caso de que la promesa que se resuelva
// más rápido falle, todas las promesas se detienen, pero si ya
// alguna ha sido resuelta antes de que una falle, el resultado
// será la promesa resuelta.
Promise.race([ sumarLento(5), sumarRapido(10) ])
    .then(console.log)
    .catch(console.log)
