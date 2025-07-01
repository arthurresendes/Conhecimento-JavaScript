const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verifica() {
  rl.question('Digite um número para ver se é par ou ímpar: ', function (input) {
    const num = parseInt(input);

    if (isNaN(num)) {
      console.log("Por favor, digite um número válido.");
      return verifica(); // repete
    }

    if (num % 2 === 0) {
      console.log(`${num} é número par`);
    } else {
      console.log(`${num} é número ímpar`);
    }

    rl.question('\nQuer testar de novo? (1 - para testar novamente): ', function (opcao) {
      if (opcao.trim() === '1') {
        verifica(); // chama novamente
      } else {
        console.log("Encerrando...");
        rl.close();
      }
    });
  });
}