var lista_frutas = Array()
lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maca'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

for(let i =0; i < 4 ; i++){
    document.write('\n' + lista_frutas[i])
}

document.write("<br><br>")

var aux = lista_frutas.indexOf('Banana')

if(aux === 0){
    document.write('Banana esta na lista e na posição ' + aux)
}else{
    document.write("Banana nao esta na lista")
}