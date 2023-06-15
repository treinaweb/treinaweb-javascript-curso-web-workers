import { getNomes } from './repository.mjs'
const myInput = document.querySelector("input");
const nomesGlobal = [];

window.addEventListener("load", () => {
    const ul = document.querySelector("ul");
    const nomes = getNomes(200000);

    let element = '';
    nomes.forEach((nome) => {
        nomesGlobal.push(nome);
        element += `<li>${nome}</li>`
    })
    ul.innerHTML = element;
});


myInput.addEventListener("keyup", () => {
    const mySpan = document.querySelector("span");
    mySpan.innerText = 'Pesquisando...';
    const { value } = myInput;
    const worker = new Worker("./myWorker.js")

    worker.postMessage({ nomesGlobal, value })

    worker.onmessage = function ({ data }) {
        const ul = document.querySelector("ul");
        let element = '';
        data.forEach((nome) => {
            element += `<li>${nome}</li>`
        })
        mySpan.innerText = '';
        ul.innerHTML = element;
    }
});
