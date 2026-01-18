var lista_frutas = Array()
lista_frutas[0] = 'Morango'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Maca'


document.write(lista_frutas.sort() + "<br>")

var lista_numeros  = Array()
lista_numeros[0] = 1
lista_numeros[1] = 100
lista_numeros[2] = -2
lista_numeros[3] = 43
lista_numeros[4] = -1
lista_numeros[5] = 2
lista_numeros[6] = 3

function ordenaNum(a,b){
    return a - b
}

document.write(lista_numeros.sort(ordenaNum) + "<br>")