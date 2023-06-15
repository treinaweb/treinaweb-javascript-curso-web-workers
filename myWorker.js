let count = 0;

self.onmessage = function (event) {
    console.log(event.data);
}

setInterval(() => {
    count++;
    self.postMessage(count);
}, 1000);


console.log('URL completa do script deste Worker: ' + self.location.href);
console.log('Hostname: ' + self.location.hostname);
console.log('Pathname: ' + self.location.pathname);
