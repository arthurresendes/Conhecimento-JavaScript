let Banco = function(){
    var saldo = 0
    var limite = 10000

    this.nome = 'Arthur'
    this.idade = 19

    this.getSaldo = function(){
        return saldo
    }

    this.setSaldo = function(valor){
        var verSaldo = this.getSaldo() + valor
        if(verSaldo >= limite){
            aumentaLimite(valor)
            saldo += valor
            return 'Limite aumentado'
        }else{
            return saldo += valor
        }
    }

    this.depositar = function(valor){
        return saldo -= valor
    }

    var aumentaLimite = function(valor){
        return limite += valor
    }
}


let banco1 = new Banco()

console.log(banco1.nome)
console.log(banco1.idade)
console.log(banco1.saldo)



console.log(banco1.setSaldo(1200))
console.log(banco1.getSaldo())
banco1.depositar(100)
console.log(banco1.getSaldo())

console.log(banco1.setSaldo(12000))
console.log(banco1.getSaldo())
banco1.depositar(1000)
console.log(banco1.getSaldo())