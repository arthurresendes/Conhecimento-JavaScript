
function calcularMedia(){
    let primeira_nota = Number(document.getElementById('nota1').value);
    let segunda_nota = Number(document.getElementById('nota2').value);
    let terceira_nota = Number(document.getElementById('nota3').value);
    let soma = primeira_nota + segunda_nota + terceira_nota
    let media = soma / 3
    document.getElementById("result").innerHTML = `Média Final: ${media.toFixed(2)}`;
}