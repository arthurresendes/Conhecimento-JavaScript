var variavel1 = prompt("Digite um numero inteiro: ")
var variavel2 = prompt("Digite outro numero só que com casas decimais: ")

variavel1 = parseInt(variavel1)
variavel2 = parseFloat(variavel2)
result = parseFloat(variavel1+variavel2)

document.write('<h1> Soma: ', result, '<h1/>')
document.write('<br/><hr/>')
result = (variavel1.toString() + variavel2.toString())
document.write('<h1> Concatenação: ', result, '<h1/>')

/*
Casting seria converter as variaveis para algum tipo, exemplo:
parseInt = para inteiro
parseFloat = para num flutante
toString = Para string

*/