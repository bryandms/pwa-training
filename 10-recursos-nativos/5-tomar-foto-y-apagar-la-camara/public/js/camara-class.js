class Camara {
    constructor(videoNode) {
        this.videoNode = videoNode
        console.log('Camara Class init')
    }

    encender() {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 300, height: 300 }
        }).then(stream => {
            this.videoNode.srcObject = stream
            this.stream = stream
        })
    }

    apagar() {
        this.videoNode.pause()

        if (this.stream) {
            this.stream.getTracks()[0].stop()
        }
    }

    tomarFoto() {
        // Crear elemento canvas para renderizar la foto
        let canvas = document.createElement('canvas')

        // Dimensiones del canvas
        canvas.setAttribute('width', 300)
        canvas.setAttribute('height', 300)

        // Obtener el contexto del canvas
        let context = canvas.getContext('2d') // Una simple imagen

        // Renderizar imagen dentro del canvas
        context.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height)

        this.foto = context.canvas.toDataURL()

        canvas = null
        context = null

        return this.foto
    }
}