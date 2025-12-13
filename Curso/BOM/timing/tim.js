//setTimeout(function(){document.write('Teste')}, 5000)

let i = 60
setInterval(function(){
    document.write(i + '<br>') 
    i --
    if(i == 0){
        setTimeout(function(){document.write('1 minuto')}, 1000)
        window.location.reload()
    }
},1000)
