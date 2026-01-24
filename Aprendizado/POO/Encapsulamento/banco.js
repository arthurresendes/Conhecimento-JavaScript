class Banco{
    #saldo

    constructor(saldo){
        this.#saldo = saldo
    }

    depositar(valor){
        this.#saldo += valor
    }
    sacar(valor){
        this.#saldo -= valor
    }

    ver_saldo(){
        return this.#saldo
    }
}

banco1 = new Banco(1000)
banco1.depositar(100)
console.log(banco1.ver_saldo())
banco1.sacar(50)
console.log(banco1.ver_saldo())