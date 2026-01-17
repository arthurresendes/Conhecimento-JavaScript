class Calculadora{
    constructor(){
        this.a = 10
        this.b = 5
        this.operador = 'multi'
    }

    calcular(){
        if(this.operador == 'soma'){
            console.log(this.a + this.b)
        }
        else if(this.operador == 'sub'){
            console.log(this.a - this.b)
        }
        else if(this.operador == 'multi'){
            console.log(this.a * this.b)
        }
        else if(this.operador == 'divi'){
            console.log(this.a / this.b)
        }else{
            console.log('Erro')
        }
    }
}


calculadora = new Calculadora()
calculadora.calcular()