const counts = {}

self.onconnect = function (event) {
    const port = event.ports[0];

    counts[port] = 0;

    setInterval(() => {
        counts[port]++;
        port.postMessage(`Contador: ${counts[port]}`)
    }, 1000);
}