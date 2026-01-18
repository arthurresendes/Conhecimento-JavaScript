var nome = prompt("Digite seu nome: ")
var anonasc = prompt("Qual seu ano de nascimento: ")
var idade = 2025 - anonasc

document.write("<h1>Junção com +: </h1>")
document.write('<p>Ola ' + nome + ' tudo bem? , você tem ' + idade + 'anos!!</p>')
document.write("<h1>Junção com ${}: </h1>")
document.write(`<p> Olá , ${nome} você tem ${idade} anos </p>`)