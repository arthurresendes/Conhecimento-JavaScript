function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const aleatorio = numeroAleatorio(1, 10);
let novamente;

do {
    let numero;

    do {
        numero = parseInt(window.prompt("Adivinhe um número de 1 a 10:"));
    } while (numero > 10 || numero < 1 || isNaN(numero));

    if (numero === aleatorio) {
        window.alert("Parabéns, você acertou o número: " + aleatorio);
        break;
    } else {
        novamente = parseInt(window.prompt("Você errou. Tente novamente digitando o número 1:"));
    }
} while (novamente === 1);
