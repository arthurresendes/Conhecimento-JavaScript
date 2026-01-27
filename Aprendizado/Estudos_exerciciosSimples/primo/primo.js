window.alert("Iremos verificar se seu numero é primo");

let contaPrimo = 0;

let numero = prompt("Digite um numero: ");

for(let i = 1 ; i <=numero ; i++){
 if(numero % i == 0){
    contaPrimo++;
 }
}

if(contaPrimo == 2){
    window.alert("Seu numero é primo")
}else window.alert("Seu numero nao é primo");