function sumarUno(numero) {
    // Las promesas reciben dos callbacks, resolve en caso de que
    // todo salga bien y reject en caso de que se de un error
    let promise = new Promise((resolve, reject) => {
        console.log(numero)
        if (numero >= 7) {
            reject('El número es muy alto')
        }

        setTimeout(() => {
            // En caso de que no suceda ningún error se invoca el resolve
            resolve(numero + 1)
        }, 800)
    })

    return promise
}

// Resolución al problema de callbacks hell
sumarUno(5)
    .then(sumarUno)
    .then(sumarUno)
    .then(nuevoValor => {
        console.log(nuevoValor)
    })
    .catch(error => {
        console.log(error)
    })


// Si el argumento de la funcion a llamar en el then es la respuesta
// de la promesa, no es necesario definir la arrow function #2
// La función #1 y #2 hacen exactamente lo mismo
// #1 .then(sumarUno)
// #2 .then(nuevoValor => sumarUno(nuevoValor))