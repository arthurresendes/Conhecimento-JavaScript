class Produto{
    constructor(descricao,preco){
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}


let produto = new Produto("Cafe",20)
produto.verDescricao()

let produtoLiteral = {
    descricao: 'Nootebook',
    preco: 1500,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

console.log(produtoLiteral.descricao)
console.log(produtoLiteral.preco)
produtoLiteral.verDescricao()
