let assinatura = {
    idCliente: 100,
    descricao: 'Acesso a internet',
    status(){
        console.log('Ativos')
    }
}

console.log(assinatura.descricao)

let y = assinatura
// Armazenado informações na variavel y, pegando a referencia
console.log(y.descricao)

y.descricao = 'Internet + Tv + telefone'

console.log(assinatura.descricao)
console.log(y.descricao)