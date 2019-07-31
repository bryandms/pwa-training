# [⬅](../../README.md) Inicio del proyecto

## Servir la aplicación

Utilizaremos un servidor local para poder servir nuestros archivos del proyecto con el protocolo _http_ y no _file_.

### Opción 1: http-server

Para instalarlo entonces ejecutamos el siguiente comando.

```bash
npm install http-server -g
```

Para ejecutarlo nos ubicamos en el directorio del proyecto, abrimos una nueva terminal y ejecutamos el siguiente comando.

```bash
http-server

# Veremos algo como lo siguiente
Starting up http-server, serving ./
Available on:
  http://192.168.56.1:8080
  http://192.168.99.1:8080
  http://192.168.1.135:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

Luego abrimos el navegador y utilizamos `localhost:8080`

**Nota:** Es importante utilizar `locahost` y no la `IP`.

[Ver más información http-server](https://www.npmjs.com/package/http-server)

### Opción 2: XAMPP

Podemo ubicar nuestro proyecto en el directrio `C:\xampp\htdocs`. Iniciamos el servidor de apache y accedemos al navegador.

[Ver más información de xampp](https://www.apachefriends.org/es/index.html)