function operadores(){
    return [' + ' , ' - ' ,' * ' ,' /'];
}

let num1 = parseFloat(prompt("Digite um numero: "));

let num2 = parseFloat(prompt("Digite outro numero: "));

let resposta;


let escolha = prompt("Escolha uma das opcoes " + operadores().join(' ') )//O join da espaco entre os operadores
if(escolha == '+'){
    resposta = num1+num2;
    window.alert("Voce escolheu o operador de soma '+' , sua resposta é: " + resposta);
} else if (escolha == '-'){
    resposta = num1-num2;
    window.alert("Voce escolheu subtracao '-' , sua resposta é: " + resposta);
}else if(escolha == '*'){
    resposta = num1 * num2;
    window.alert("Voce escolheu multiplicação '*' , sua resposta é: " + resposta);
} else if(escolha  == '/'){
    resposta  = num1/num2;
    window.alert("Voce escolheu a divisao '/' , sua resposta é: " + resposta);
}else console.log("Operacao invalida")