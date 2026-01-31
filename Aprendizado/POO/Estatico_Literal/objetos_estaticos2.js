let nome = 'Arthur'
let idade = 19
let sexo = 'Masculino'
let profissao = 'Aprendiz - Dados'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`${this.nome} tem ${this.idade} anos, eh do sexo ${this.sexo} e trabalha como ${this.profissao}`)
    }
}

console.log(objeto.nome)
console.log(objeto.idade)
console.log(objeto.sexo)
console.log(objeto.profissao)
objeto.exibirResumo()


let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`${this.nome} tem ${this.idade} anos, eh do sexo ${this.sexo} e trabalha como ${this.profissao}`)
    }
}

console.log("==========")
console.log(objeto2.nome)
console.log(objeto2.idade)
console.log(objeto2.sexo)
console.log(objeto2.profissao)
objeto2.exibirResumo()