var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z'];

do{
var numero = window.prompt("Digite um numero de 1 a 26 para retorna as letras do alfabeto");
}while(numero < 1 || numero > 26);

window.alert("As letras do alfabeto são: " + alfabeto.slice(0, numero).join(", "));

// Usamos o método slice(0, numero) para pegar uma parte do array 'alfabeto',
// do índice 0 até o índice 'numero - 1'. Isso retorna as primeiras 'numero' letras,
// conforme o valor digitado pelo usuário. Por exemplo, se for digitado 5, o slice retorna
// ['A', 'B', 'C', 'D', 'E']. O método slice não altera o array original, apenas retorna uma cópia da parte desejada.
