function somarTudo(...numeros) {
  return numeros.reduce((total, atual) => total + atual, 0);
}
console.log(somarTudo(1, 2, 3, 4)); // Resultado: 10

const [primeiro, ...resto] = [10, 20, 30, 40];
// primeiro = 10, resto = [20, 30, 40]


