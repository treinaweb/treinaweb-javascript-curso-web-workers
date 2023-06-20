import { getNomes } from './repository.mjs';
const myInput = document.querySelector('input');

const nomesGlobal = [];

window.addEventListener('load', function () {
    const ul = document.querySelector('ul');
    const nomes = getNomes(10000);

    let elements = '';
    nomes.forEach(function (nome) {
        nomesGlobal.push(nome);
        elements += `<li>${nome}</li>`
    });

    ul.innerHTML = elements;
});

myInput.addEventListener('keyup', function () {
    const span = document.querySelector('span');
    const ul = document.querySelector('ul');
    const value = myInput.value;
    span.innerText = 'pesquisando...';
    const novosNomes = nomesGlobal.filter((nome) => nome.toLowerCase().includes(value));

    let elements = '';
    novosNomes.forEach(function (nome) {
        elements += `<li>${nome}</li>`
    });

    ul.innerHTML = elements;
    span.innerText = '';
});
