class Automovel{
    constructor(marca,preco){
        this.marca = marca
        this.preco = preco
    }
}

class Carro extends Automovel{
    constructor(marca,preco,qtd_rodas){
        super(marca,preco)
        this.qtd_rodas = qtd_rodas
    }

    visualizar(){
        console.log(`${this.marca} ${this.preco} ${this.qtd_rodas}`)
    }
}

class Moto extends Automovel{
    constructor(marca,preco,qtd_rodas){
        super(marca,preco)
        this.qtd_rodas = qtd_rodas
    }
     visualizar(){
        console.log(`${this.marca} ${this.preco} ${this.qtd_rodas}`)
    }
}


aut = new Automovel('Ferrari', 10000000)
car = new Carro('Mercedes', 1000000, 4)
car.visualizar()
mot = new Moto('Kawasaki', 200000, 2)
mot.visualizar()
