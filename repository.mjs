
function gerarNomeAleatorio() {
    const primeirosNomes = ['João', 'Maria', 'José', 'Ana', 'Carlos', 'Lucas', 'Julia', 'Fernanda', 'Ricardo', 'Luis', 'Camila', 'Gabriel', 'Roberto', 'Mariana', 'Rodrigo', 'Isabela'];
    const segundosNomes = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Ferreira', 'Gomes', 'Ribeiro', 'Martins', 'Costa', 'Alves', 'Mendes', 'Pereira', 'Barros', 'Dias', 'Castro'];
    const terceirosNomes = ['Júnior', 'Neto', 'Filho', 'Sobrinho', 'III', 'IV', 'V', '', '', '', '', '', '', '', '', '']; // Algumas opções em branco para não ter sempre terceiro nome.

    const nomeAleatorio = primeirosNomes[Math.floor(Math.random() * primeirosNomes.length)] + ' ' +
        segundosNomes[Math.floor(Math.random() * segundosNomes.length)] + ' ' +
        terceirosNomes[Math.floor(Math.random() * terceirosNomes.length)];
    return nomeAleatorio;
}

export function getNomes(quantidade) {
    let listaNomes = [];
    for (let i = 0; i < quantidade; i++) {
        listaNomes.push(gerarNomeAleatorio());
    }
    return listaNomes;
}