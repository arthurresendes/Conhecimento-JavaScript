var altura = 0
var largura = 0

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}

ajustaTamanho()

function posicaoRandomica(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX,posicaoY)

    var mosca = document.createElement('img')
    mosca.src = "imagens/mosca.png"
    mosca.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosquito'

    document.body.appendChild(mosca)

    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}