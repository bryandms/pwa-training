function sumarUno(numero, callback) {
    if (numero >= 7) {
        // Si hay un error en el callback, el primer argumento es el error,
        // si no sucede ningún error, los argumentos que siguen son la respuesta
        callback('Número muy alto')
        return
    }

    setTimeout(() => {
        // En caso de que no suceda ningún error se envía null
        callback(null, numero + 1)
    }, 800)
}

// Problemática
// Infierno de los callbacks o callback hell
sumarUno(5, (error, nuevoValor) => {
    if (error) {
        console.log(error)
        return
    }

    sumarUno(nuevoValor, (error, nuevoValor2) => {
        if (error) {
            console.log(error)
            return
        }

        sumarUno(nuevoValor2, (error, nuevoValor3) => {
            if (error) {
                console.log(error)
                return
            }

            console.log(nuevoValor3)
        })
    })
})