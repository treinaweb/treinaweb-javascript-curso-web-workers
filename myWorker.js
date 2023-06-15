self.onmessage = function ({ data: { nomesGlobal, value } }) {
    const novosNomes = nomesGlobal.filter((nome) => nome.toLowerCase().includes(value.toLowerCase()));

    self.postMessage(novosNomes);
}