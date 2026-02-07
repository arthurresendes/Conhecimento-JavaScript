let BicicletaFactory = function(){
    return{
        cor: 'Vermelha',
        aro: 12,
        marcha: 12,

        pedalar() {console.log("Pedalando")}
    }
}

let Bicicleta1 = BicicletaFactory()

Bicicleta1.cor = 'Azul'
Bicicleta1.pedalar()