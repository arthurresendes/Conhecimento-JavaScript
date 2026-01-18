function exibirArtigo(id , callbackSucesso, callbackErro){
    if(true){
        callbackSucesso('Funções de callback JS', 'Funções de callback são muitos utilizadas')
    }else{
        callbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write("<h1>" + titulo + "</h1>")
    document.write("<hr>")
    document.write("<h1>" + descricao + "</h1>")
}
var callbackErro = function(erro){
    document.write("<h1> Erro: " + erro + "</h1>")
}

exibirArtigo(1, callbackSucesso, callbackErro)