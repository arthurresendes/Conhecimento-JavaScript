var nome = window.prompt("Digite seu nome: ")

var escolha = window.prompt("Escolha uma opção : \n 1-Ver nome em Maiusculo \n 2-Ver nome minusculo \n 3-Ver dos dois jeitos")
do{
if(escolha == 1){
    window.alert("Seu nome todo maiusculo é: " + nome.toUpperCase());
}else if(escolha == 2){
    window.alert("Seu nome todo minusculo é: " + nome.toLowerCase())
}else {
    window.alert("Seu nome todo maiusculo é: " + nome.toUpperCase() + "\n Seu nome todo minusculo é:  " + nome.toLowerCase())
}
}while(escolha > 3 || escolha < 1)