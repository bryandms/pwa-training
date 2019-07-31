// indexedDB: Reforzamiento

// Creación de la base de datos, el segundo argumento es el número de versionamiento
let request = window.indexedDB.open('mi-database', 1)

// Se actualiza cuando se crea o se sube la versión de la base de datos
request.onupgradeneeded = e => {
    console.log('Actualización de DB')

    let db = e.target.result

    // Se crea un espacio de almacenamiento
    db.createObjectStore('heroes', {
        keyPath: 'id'
    })

}