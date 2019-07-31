function sumarUno(numero) {
    // Las promesas reciben dos callbacks, resolve en caso de que
    // todo salga bien y reject en caso de que se de un error
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // En caso de que no suceda ningún error se invoca el resolve
            resolve(numero + 1)
        }, 800)
    })

    return promise
}

// Resolución al problema de callbacks hell
sumarUno(5)
    .then(nuevoValor => {
        console.log(nuevoValor)
        return sumarUno(nuevoValor)
    })
    .then(nuevoValor => {
        console.log(nuevoValor)
        return sumarUno(nuevoValor)
    })
    .then(nuevoValor => {
        console.log(nuevoValor)
    })

