let count = 0;

self.onmessage = function (event) {
    console.log(event.data);
}

setInterval(() => {
    count++;
    self.postMessage(count);
}, 1000);


