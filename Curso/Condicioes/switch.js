num1 = parseInt(prompt("Digite número inteiro: "))
num2 = parseInt(prompt("Digite outro número inteiro: "))
opcao = prompt("Qual operação aritmetica você quer fazer: + ,- , *, /")

switch (opcao) {
    case '+':
        res = num1 + num2
        document.write("<h1> Soma: " + res + "</h1>")
        break;
    case '-':
        res = num1 - num2
        document.write("<h1> Subtração: " + res + "</h1>")
        break;
    case '*':
        res = num1 * num2
        document.write("<h1> Multiplicação: " + res + "</h1>")
        break;
    case '/':
        res = num1 / num2
        document.write("<h1> Divisão: " + res + "</h1>")
        break;

    default:
        alert("Operação não encontrada")
        break;
}