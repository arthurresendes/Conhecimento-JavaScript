/* var result = <condicao> ? <verdadeiro> : <falso> */


var nota = parseFloat(prompt("Digite sua nota: "))

const MEDIA = 6.0

var res = (nota >= MEDIA) ? 'Aprovado': 'Reprovado'
document.write(res)