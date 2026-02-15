const [primeiro, ...resto] = [10, 20, 30, 40];
// primeiro = 10, resto = [20, 30, 40]


function nums(...p){
    let res = 0
    for(let i = 0; i < p.length; i++){
        res += i
    }
    return res
}

console.log(nums(1,2,3,4,4,5,6))