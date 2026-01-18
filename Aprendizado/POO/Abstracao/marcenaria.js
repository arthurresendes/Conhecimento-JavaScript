class Cadeira{
    constructor(qtde_pernas,gira,cor){
        this.qtde_pernas = qtde_pernas
        this.gira = gira
        this.cor = cor
    }

    girarCadeira(){
        if(this.gira == true){
            console.log('girou')
        }else{
            console.log("Cadeira não gira")
        }
    }
}

let cadeiras = Array()

cadeiras.push(new Cadeira(4,true,'azul'))
cadeiras.push(new Cadeira(2,false,'branca'))

console.log(cadeiras)
cadeiras[0].girarCadeira()
cadeiras[1].girarCadeira()