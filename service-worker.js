
// ocorre apenas uma única vez para cada Service Worker.
self.addEventListener('install', function (event) {
    console.log('install')
});

// É executado quando um Service Worker é ativado.
self.addEventListener('activate', function (event) {
    console.log("activate")
});
