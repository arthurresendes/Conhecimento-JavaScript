let Carro = function(){
    this.cor = 'Azul',
    this.modelo = 'Chevette',
    this.velocidadeAtual = 0,
    this.velocidadeMaxima = 200

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidade){
        this.velocidadeAtual = velocidade
    }
}

let carro = new Carro()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())


carro.setVelocidadeAtual(50)
console.log(carro.getVelocidadeAtual())