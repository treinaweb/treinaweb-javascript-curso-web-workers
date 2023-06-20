const VERSION_CACHE = 'v1.0.0';

const FILES = [
    './index.html',
    './styles/style.css'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(VERSION_CACHE)
            .then(function (cache) {
                return cache.addAll(FILES);
            })
    )
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                const fetRequest = event.request.clone();
                return response || fetch(fetRequest);
            })
    )
});



self.addEventListener('activate', function (event) {

    const versionsCache = [VERSION_CACHE];
    event.waitUntil(caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (key) {
            if (versionsCache.indexOf(key) === -1) {
                return caches.delete(key);
            }
        }))
    }))
});
