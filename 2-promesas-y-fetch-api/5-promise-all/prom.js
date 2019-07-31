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
        setTimeout(() => resolve(numero + 1), 300)
    })
}

function retornaTrue() {
    return true
}

let cosas = [ sumarLento(5), sumarRapido(10), true, 'Hola Mundo', retornaTrue() ]

// Resolución de todas las promesas juntas, aunque una termine
// antes que la otra
Promise.all(cosas)
    .then(respuestas => {
        console.log(respuestas)
    })
    .catch(console.log) // #1

// En este caso sumarRapido siempre va a terminar su ejecución más
// rápido que sumar lento sin importar el orden en como esten acomodados
// sumarLento(5).then(console.log)
// sumarRapido(10).then(console.log)

// #1 Si una promesa falla en el Promise.all, se detiene la ejecución de
// todas las demás aún así estas esten bien