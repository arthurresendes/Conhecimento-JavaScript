let parOuImpar = function(numero){
    if(numero % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
console.log(parOuImpar(5))

let parImparArrow = numero => numero %2 == 0? 'par' : 'impar'

console.log(parImparArrow(6))