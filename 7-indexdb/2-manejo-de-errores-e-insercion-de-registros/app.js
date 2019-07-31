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

// Manejo de errores
request.onerror = e => {
    console.log('DB error:', event.target.error)
}

// Insertar datos
request.onsuccess = e => {
    let db = e.target.result

    let heroesData = [
        { id: '111', heroe: 'Spiderman', mensaje: 'H Spiderman' },
        { id: '222', heroe: 'Ironman', mensaje: 'H Ironman' }
    ]

    // Recibe dos argumento, el primero el espacio donde queremos guardar los datos,
    // el segundo indica si la transaccion es de lectura o de lectura y escritura
    let heroesTransaction = db.transaction('heroes', 'readwrite')

    heroesTransaction.onerror = e => {
        console.log('Error al guardar', e.target.error)
    }

    // Informa si la transaccion se hace correctamente
    heroesTransaction.oncomplete = e => {
        console.log('Transaccion hecha', e)
    }

    let heroesStore = heroesTransaction.objectStore('heroes')

    for (let heroe of heroesData) {
        heroesStore.add(heroe)
    }

    heroesStore.onsuccess = e => {
        console.log('Nuevo item agregado a la DB')
    }
}