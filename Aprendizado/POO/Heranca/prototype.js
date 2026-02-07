function Pessoa(nome) {
  this.nome = nome;
}
// Adicionando método ao prototype
Pessoa.prototype.dizerOla = function() {
  return "Olá, eu sou " + this.nome;
};

var joao = new Pessoa("João");
console.log(joao.dizerOla()); // "Olá, eu sou João"
