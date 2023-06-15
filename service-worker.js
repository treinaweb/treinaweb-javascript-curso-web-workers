const CACHE_NAME = '1.0.0';

const URL_TO_CACHES = [
    '/index.html',
    '/style/style.css',
    '/sobre/index.html'
];


self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(URL_TO_CACHES);
    }))
});


self.addEventListener("fetch", function (event) {

    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                const fetchRequest = event.request.clone();
                return response || fetch(fetchRequest);
            })
    )
});



self.addEventListener('activate', function (event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(caches.keys().then(cachesKey => {
        return Promise.all(cachesKey.map((key) => {
            if (cacheWhitelist.indexOf(key) === -1) {
                return caches.delete(key);
            }
        }))
    }))
});