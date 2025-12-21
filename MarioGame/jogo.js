var largura = 0
var altura = 0

function ajustaTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}

ajustaTela()

function posicaoRandomica(){

    if(document.getElementById('mario')){
        document.getElementById('mario').remove()
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX,posicaoY)

    var mario = document.createElement('img')
    mario.src = "Mario.png"
    mario.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
    mario.style.left = posicaoX + 'px'
    mario.style.top = posicaoY + 'px'
    mario.style.position = 'absolute'
    mario.id = 'mario'

    document.body.appendChild(mario)

    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mario1'
        case 1:
            return 'mario2'
        case 2:
            return 'mario3'
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

function resTotalElementos(){
    var resposta = document.createElement('input')
    resposta.type = 'text'
    resposta.id = 'totalMario'
    resposta.placeholder = 'Quantos marios apareceram ?';

    var validar = document.createElement('input')
    validar.type = 'submit'
    validar.value = 'Enviar'

    document.body.appendChild(resposta)
    document.body.appendChild(validar)
}