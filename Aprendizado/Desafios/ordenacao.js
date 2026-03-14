let numeros = [1,5,2,4,3,7,8]
let newNumbers = []
let tamanho = numeros.length

for(i = 0; i < tamanho; i++){
    menor = Math.min(...numeros)

    newNumbers.push(menor)

    let indice = numeros.indexOf(menor);
    numeros.splice(indice, 1); 
}

console.log(newNumbers)