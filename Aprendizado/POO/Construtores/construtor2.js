let Carro = function(){
    var velocidadeMaxima = 200
    var quilometrosRodados = 0

    this.cor = 'Azul',
    this.modelo = 'Chevette',
    this.velocidadeAtual = 0,

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual()
        if(velocidade >= velocidadeMaxima){
            return "Não é possivel acelerar mais"
        }else{
            velocidade = this.getVelocidadeAtual() + 10
            this.setVelocidadeAtual(velocidade)
            setQuilometrosRodados(0.07)
            console.log(`Acelerando... Quilometros rodados: ${quilometrosRodados}`)
        }
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidade){
        this.velocidadeAtual = velocidade
    }

    var setQuilometrosRodados = function(quilometros){
        quilometrosRodados += quilometros
    }
}

let carro = new Carro()
console.log(carro.getVelocidadeAtual())
carro.acelerar()
console.log(carro.getVelocidadeAtual())


carro.setVelocidadeAtual(50)
console.log(carro.getVelocidadeAtual())

console.log(carro.velocidadeMaxima) // Undefined, pois esta em uma variavel agora e nao em constructor

carro.acelerar()
carro.acelerar()
carro.acelerar()