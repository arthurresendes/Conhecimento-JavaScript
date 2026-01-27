function simNao(){
    return("1-Sim 2-Nao");
}

function lembrete(){
    console.log("Vale lembrar que se preencher nos sintomas qualquer outro número ele irá contar como 'não' e se escrever letras não iremos conseguir identificar!!");
}

function contagem(){
    let contador = 0;

    console.log("Iremos te diagnosticar!! ");
    lembrete();
    let febre = parseInt(prompt("Você tem febre? " + simNao()));
    if(febre == 1)contador++;
    let coriza = parseInt(prompt("Você tem coriza? " + simNao()));
    if(coriza == 1)contador++;
    let dorCabeca = parseInt(prompt("Você tem dor de cabeca? " + simNao()));
    if(dorCabeca == 1)contador++;
    let dorGarganta = parseInt(prompt("Você tem dor de garganta? " + simNao()));
    if(dorGarganta == 1)contador++;

    if(contador == 1){
        console.log("Voce tem um sintoma, vá ao medico ")
    }else if (contador == 2){
    console.log("Você está com resfriado. Tome Ibuprofeno ou Paracetamol.");
} else if (contador == 3){
    console.log("Você está com gripe. Use analgésicos, antitérmicos e descongestionantes.");
} else if (contador == 4){
    console.log("Consulte um médico com urgência!");
} else {
    console.log("Sem sintomas detectados.");
}

let repetir;
        do {
            diagnosticar();
            repetir = prompt("Deseja fazer outro diagnóstico? (s/n): ");
        } while (repetir && repetir.toLowerCase() === 's');

        console.log("Obrigado por visitar.");


}
contagem();