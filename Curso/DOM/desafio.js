function foco(cor) {
    document.getElementById('config').style.background = cor
}

function voltar(cor) {
    document.getElementById('config').style.background = cor
}

function verifica() {
    palavra = document.getElementById('config').value

    if (palavra.length > 3) {
        document.getElementById('config').style.background = '#FF0000'
    } else {
        document.getElementById('config').style.background = '#00FF00'
    }
}