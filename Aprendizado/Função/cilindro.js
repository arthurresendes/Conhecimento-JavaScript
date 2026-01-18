/*Para calcular a área, volume e perímetro de um cilindro, utilize as fórmulas: volume é \(V=\pi r^{2}h\), área total é \(A=2\pi r(r+h)\) e o perímetro (circunferência da base) é \(P=2\pi r\). É importante usar o raio (\(r\)) e a altura (\(h\)) do cilindro, sendo \(\pi \) uma constante aproximadamente igual a \(3,14159\).  */

const PI = 3.14159

function calcular_area(raio,altura){
    area = 2 * PI * raio *(raio + altura)

    return area
}

function cilindro_perimetro(raio){
    perimetro = 2 * PI * raio

    return perimetro
}

function cilindro_volume(raio,altura){
    volume = PI * raio ** 2 * altura

    return volume
}

var opcao = parseInt(prompt("Você quer calcular oq do cilindro.\n1- Área\n2-Perimetro\n3-Volume"))
var raio = parseFloat(prompt("Digite o valor do raio: "))

switch (opcao) {
    case 1:
        var altura = parseFloat(prompt("Digite o valor da altura: "))
        res = calcular_area(raio,altura)
        document.write(`<h1> O resultado da área desse cilindro é ${res} </h1>`)
        break;
    case 2:
        res = cilindro_perimetro(raio)
        document.write(`<h1> O resultado do perimetro desse cilindro é ${res} </h1>`)
        break;
    case 3:
        var altura = parseFloat(prompt("Digite o valor da altura: "))
        res = cilindro_volume(raio,altura)
        document.write(`<h1> O resultado do volume desse cilindro é ${res} </h1>`)
        break;

    default:
        break;
}