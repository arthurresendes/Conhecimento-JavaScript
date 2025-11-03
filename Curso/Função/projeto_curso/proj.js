var num1 = parseFloat(prompt("Digite um numero"))
var num2 = parseFloat(prompt("Digite um numero"))

var operacao = prompt("Qual operação quer fazer\nSoma ou Subtração: ").toLowerCase()
while(operacao != 'soma' && operacao != 'subtracao' && operacao != 'subtração'){
    alert("Digite a operação de modo correto!!")
    var operacao = prompt("Qual operação quer fazer\nSoma ou Subtração: ").toLowerCase()
}

function calculo(num1,num2, operacao){
    if(operacao == 'soma'){
        return num1 + num2
    }else{
        return num1 - num2
    }
}

document.write(`O resultado é: ${calculo(num1,num2,operacao)}`)