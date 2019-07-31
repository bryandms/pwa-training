// Cuando realizamos una solicitud al servidor y el API si existe
// pero el recurso no, vamos a obtener un error 404, este error
// no es manejado por el catch
// Los errores 404 no son manejado por el catch
fetch('https://reqres.in/api/users/10000')
    .then(resp => {
        if (resp.ok) {
            return resp.json()
        } else {
            // console.log('No existe el recurso')
            // Para manejar el error en el catch debemos poner
            throw new Error('No existe el recurso')
        }
    })
    .catch(error => {
        console.log('Error en la petición')
        console.log(error)
    })