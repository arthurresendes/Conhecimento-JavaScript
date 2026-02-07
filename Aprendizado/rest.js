const frutas = ['maca', 'banana'];
const todasFrutas = [...frutas, 'laranja', 'uva']; 
console.log(todasFrutas)
// maçã,banana,laranja,etc

const usuario = { nome: 'Ana', idade: 25 };
const usuarioAtualizado = { ...usuario, cidade: 'São Paulo' };
console.log(usuarioAtualizado)
