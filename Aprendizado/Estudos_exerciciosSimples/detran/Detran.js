var nome = window.prompt("Digite seu nome: ")
var anoNasc = window.prompt("Digite quando você nasceu: ");
var anoAtual = window.prompt("Digite o ano que estamos: ")
var idade = anoAtual - anoNasc;
if(idade >= 18){
    window.alert("Você pode tirar a CNH " + nome + "sua idade é: " + idade);
} else {
    window.alert("Espre completar 18 anos " + nome + "assim você podera tirar a CNH daqui: " + (18 - idade) + " anos");
    
}

