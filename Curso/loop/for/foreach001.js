var x = ['Arthur', 'Gabriel','Jose']

x.forEach(function(valor,indice){
    if (valor == 'Jose'){
        valor = 'Maria'
    }
    document.write('indice ' + indice)
    document.write(' nome: ' + valor)
    document.write("<br><br>")
})