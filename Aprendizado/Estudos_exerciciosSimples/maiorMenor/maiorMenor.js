var numeros = window.prompt("Quanto numeros quer utilizar neste teste: ")

var maior = 0
var numeros = [];
var quantidade = parseInt(prompt("Quantos números você deseja digitar?"));

for (var i = 0; i < quantidade; i++) {
    var valor = parseInt(prompt("Digite o valor de número " + (i + 1) + ":"));
    numeros.push(valor);
}

var maior = numeros[0];
var menor = numeros[0];

for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

alert("O maior número foi: " + maior);
alert("O menor número foi: " + menor);
