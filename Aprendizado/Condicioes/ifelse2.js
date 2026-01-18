nome = prompt("Digite seu nome: ").toLowerCase()
idade = prompt("Digite sua idade: ")

if(nome == "arthur" && idade == 18){
    document.write("<h2>Seu nome e idade é igual o meu</h2>")
}else if (nome == "arthur" || idade == 18){
    document.write("<h2>Ou sua idade ou seu nome é igual o meu</h2>")
}else{
    document.write("<h2>Tudo diferente ded mim</h2>")
}