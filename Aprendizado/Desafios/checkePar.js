const prompt = require('prompt-sync')();

function checked(a){
    if(a % 2 ==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

let num1 = parseFloat(prompt("Digie o numero: "))
console.log(checked(num1))