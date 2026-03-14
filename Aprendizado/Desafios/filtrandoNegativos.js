function negatives(arrayNumber){
    let newList = []
    for(i = 0 ; i < arrayNumber.length; i++){
        if(arrayNumber[i] < 0){
            newList.push(arrayNumber[i])
        }
    }

    return newList
}

console.log(negatives([1,2,3,-2,3,1,-3]))