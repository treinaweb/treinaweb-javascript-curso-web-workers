import { getNomes } from './repository.mjs';
const myInput = document.querySelector('input');
const span = document.querySelector('span');
const nomesGlobal = [];
let mySharedWorker;

window.addEventListener('load', function () {
    const ul = document.querySelector('ul');

    const nomes = getNomes(1000);

    mySharedWorker = new SharedWorker('./mySharedWorker.js');
    mySharedWorker.port.start();
    mySharedWorker.port.postMessage({ nomes, value: '' });

    mySharedWorker.port.onmessage = function (event) {
        const nomes = event.data;

        let elements = '';

        nomes.forEach(function (nome) {
            nomesGlobal.push(nome);
            elements += `<li>${nome}</li>`;
        });

        ul.innerHTML = elements;
        span.innerText = '';
    }

});

myInput.addEventListener('keyup', function () {
    const value = myInput.value;
    span.innerText = 'pesquisando...';
    mySharedWorker.port.postMessage({ nomes: nomesGlobal, value });

});
