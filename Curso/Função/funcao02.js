function calcula_media(nota1, nota2, nota3) {
    var soma = nota1 + nota2 + nota3
    var media = soma / 3

    return media
}


function resultado(media, materia) {
    if (media >= 6.0) {
        return "Você passou na matéria de " + materia + " com a média de: " + media.toFixed(2);
    } else {
        return "Você não passou na matéria de " + materia + " com a média de: " + media.toFixed(2);
    }
}

alert("As notas devem estar em formato float, ou seja com .")

var nota1;
do {
    nota1 = parseFloat(prompt("Digite sua primeira nota: "));
    if (isNaN(nota1)) {
        alert("Entrada inválida. Digite um número válido. Digite novamente!");
    }
} while (isNaN(nota1)); 


var nota2;
do {
    nota2 = parseFloat(prompt("Digite sua segunda nota: "));
    if (isNaN(nota2)) {
        alert("Entrada inválida. Digite um número válido. Digite novamente!");
    }
} while (isNaN(nota2));


var nota3;
do {
    nota3 = parseFloat(prompt("Digite sua terceira nota: "));
    if (isNaN(nota3)) {
        alert("Entrada inválida. Digite um número válido. Digite novamente!");
    }
} while (isNaN(nota3));

var materia = prompt("Notas marcadas , qual materia dessas notas: ")

calculando = calcula_media(nota1, nota2, nota3)
var mensagem = resultado(calculando, materia);

document.write(`<h1>  ${mensagem} </h1>`)