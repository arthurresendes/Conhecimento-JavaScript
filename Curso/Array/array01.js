var lista_frutas = Array()
lista_frutas[0] = 'Maça'
lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Pera'

document.write('<h1>Nomes lista frutas: </h1>')
for(let i = 0; i < lista_frutas.length; i++){
    document.write(lista_frutas[i] + '<br>')
}

document.write('<hr>')
document.write('<h1>Nomes lista: </h1>')
var lista_nomes = Array('Arthur', 'Jose', 'Maria')

// Adiciona no final
lista_nomes.push('Carlos')

// Adiciona no inicio
lista_nomes.unshift('Gabriel')

// Remove do final
lista_nomes.pop()

// Remove do inicio
lista_nomes.shift()
document.write(lista_nomes)