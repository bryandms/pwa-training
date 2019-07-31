if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/pwa-training/4-ciclo-de-vida-de-un-sw-y-los-listeners-mas-comunes/5-sw-fetch/sw.js')
}

fetch('https://reqres.in/api/users')
  .then(resp => resp.text())
  .then(console.log)