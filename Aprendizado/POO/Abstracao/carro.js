class Carro{
    constructor(){
        this.marca = 'Renault'
        this.modelo = 'Kwid'
        this.cor = 'Branco'
        this.qtdePorta = 4
    }

    mostrarInfo(){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nCor: ${this.cor}\nPortas quantidade: ${this.qtdePorta}`)
    }
}

carro = new Carro()
carro.mostrarInfo()