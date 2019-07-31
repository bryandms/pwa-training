fetch('https://reqres.in/api/users/1')
    .then(resp => {
        // Cuando necesitamos reliazar una misma petición,
        // debemos clonar la respuesta, ya que si no obtendremos
        // un error de ReadableStream, ya que el body ya fue leído
        resp.clone().json()
            .then(usuario => {
                console.log(usuario.data)
            })

        resp.clone().json()
            .then(usuario => {
                console.log(usuario.data)
            })

        resp.json().then(usuario => {
            console.log(usuario.data)
        })
    })