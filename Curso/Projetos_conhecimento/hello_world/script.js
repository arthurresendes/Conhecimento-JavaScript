function zoeira(){
    var nome = document.getElementById('nome').value
    document.getElementById("res").innerHTML =`Olá hello world`;
    setTimeout(function(){document.getElementById("res").innerHTML =`Brincadeira ${nome}`;}, 5000)
}