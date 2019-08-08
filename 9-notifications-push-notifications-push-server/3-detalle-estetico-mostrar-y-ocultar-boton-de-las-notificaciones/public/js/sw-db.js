// Utilidades para grabar PouchDB
const db = new PouchDB('mensajes')

function guardarMensaje(mensaje) {
    mensaje._id = new Date().toISOString();

    return db.put(mensaje).then(() => {
        self.registration.sync.register('nuevo-post')

        const newResp = { ok: true, offline: true }
        
        return new Response(JSON.stringify(newResp))
    })
}

// Postear mensajes al API
function postearMensajes() {
    const posteos = []

    // Obtener los registros de la base de datos
    return db.allDocs({ include_docs: true }).then(docs => {
        docs.rows.forEach(row => {
            const doc = row.doc

            // Postear el documento
            const fetchProm = fetch('api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(doc)
                }).then(res => {
                    // Borrar registro de la DB cuando ya ha sido posteado
                    return db.remove(doc)
                })

            posteos.push(fetchProm)
        })

        return Promise.all(posteos)
    })
}