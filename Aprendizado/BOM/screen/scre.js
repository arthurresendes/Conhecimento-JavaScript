var altura = window.screen.availHeight
var largura = window.screen.availWidth

document.write(`Altura do navegador: ${altura}<br>Largura do navegador: ${largura}<br>`)

if(largura < 500){
    document.write('Logica para impressão do menu versão mobile')
}else{
    document.write('Logica para impressão do menu versão desktop')
}