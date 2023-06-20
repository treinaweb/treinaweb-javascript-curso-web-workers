let ports = [];

self.onconnect = function (event) {
    const port = event.ports[0];
    ports.push(port);

    port.onmessage = function (event) {
        const data = event.data;
        const novosNomes = data.nomes.filter((nome) => nome.toLowerCase().includes(data.value));
        ports.forEach(function (port) {

            port.postMessage(novosNomes);

        });
    }
}