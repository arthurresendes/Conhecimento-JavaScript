const pessoa = { nome: 'Arthur', idade: 20, cidade: 'Osasco' };

// Com Destructuring
const { nome, idade, cidade: newCity} = pessoa;
console.log(nome); // 'Arthur'
console.log(idade); // 20
console.log(newCity)