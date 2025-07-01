const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verifica() {
  rl.question('Digite um número para ver seu fatorial: ', function (input) {
    const num = parseInt(input);

    if (isNaN(num) || num < 0) {
      console.log("Por favor, digite um número inteiro não negativo.");
      return verifica(); // repete
    }

    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
      fatorial *= i;
    }

    console.log(`\nO fatorial de ${num} é ${fatorial}`);

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

// Início do programa
verifica();