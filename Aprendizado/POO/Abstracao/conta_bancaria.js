class ContaBancaria{
    constructor(){
        this.agencia = 1111
        this.numeroConta = 2222222
        this.saldo = 2000.21
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        this.saldo -= valor
    }

    verSaldo(){
        return this.saldo
    }
}

conta = new ContaBancaria()
console.log(conta.verSaldo())
conta.depositar(1000)
console.log(conta.verSaldo())
conta.sacar(500)
console.log(conta.verSaldo())