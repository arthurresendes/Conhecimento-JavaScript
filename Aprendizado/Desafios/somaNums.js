const prompt = require('prompt-sync')();

function somar(a,b){
    return a + b
}

let num1 = parseFloat(prompt("Digie o numero 1: "))
let num2 = parseFloat(prompt("Digie o numero 2: "))
console.log(somar(num1,num2))