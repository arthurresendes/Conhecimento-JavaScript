class Animal{
    constructor(raca){
        this.raca = raca
    }

    fazerSom(){
        console.log("Som não identificado")
    }
}

class Cachorro extends Animal{
    constructor(){
        super('Pitbull')
    }

    fazerSom(){
        console.log("Au Au")
    }
}

class Gato extends Animal{
    constructor(){
        super('Gato Selvagem')
    }

    fazerSom(){
        console.log("Miau Miau")
    }
}

cach = new Cachorro()
cach.fazerSom()
gat = new Gato()
gat.fazerSom()

