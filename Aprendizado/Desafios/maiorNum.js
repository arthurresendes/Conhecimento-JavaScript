function maiorNum(arr){
    maior = arr[0]
    for(let i in arr){
        if(arr[i] > maior){
            maior = arr[i]
        }
    }
    return maior
}

console.log(maiorNum([1,2,3,4,8,4,3]))