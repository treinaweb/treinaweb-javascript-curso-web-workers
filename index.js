function start() {
    const outputNormal = document.querySelector("#output-normal");
    let valueNormal = 0;
    setInterval(() => {
        valueNormal++;
        outputNormal.innerText = valueNormal;
    }, 1000);

    startWorker();
}



function startWorker() {
    const outputWorker = document.querySelector("#output-worker");
    const worker = new Worker("./myWorker.js");
    worker.postMessage("olá worker js");
    worker.onmessage = function ({ data: count }) {
        // const count = event.data;
        outputWorker.innerText = count;
    }


    // setTimeout(() => {

    //     worker.terminate();
    // }, 4000);
}