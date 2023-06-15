
self.addEventListener('install', function (event) {
    console.log('install')
});


self.addEventListener('fetch', function (event) {
    if (event.request.url.includes('index.html')) {
        const responseContent = `
            <html>
                <body>
                    <h1>Olá TreinaWeb</h1>
                </body>
            </html>
        `
        event.respondWith(new Response(responseContent, {
            headers: {
                "Content-Type": "text/html"
            }
        }))
    }
});



self.addEventListener('activate', function (event) {
    console.log("activate")
});
