let pegaDados = () => {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let selectBox = document.getElementById('minhaOperacao');
    let operacao = selectBox.value;
    return [n1,n2,operacao]
}

let alerta_and_reload = mensagem => {
    window.alert(mensagem)
    window.location.reload()
}

let calcular = () =>{
    [valor1,valor2,operacao] = pegaDados()
    let resposta = document.getElementById('res')
    if(operacao == 'ad'){
        resposta.innerHTML = `<h2>Resultado: ${valor1 + valor2}</h2>`;
    }else if(operacao == 'sub'){
        resposta.innerHTML = `<h2>Resultado: ${valor1 - valor2}</h2>`;
    }else if(operacao == 'multi'){
        resposta.innerHTML = `<h2>Resultado: ${valor1 * valor2}</h2>`;
    }else if(operacao == 'divi'){
        valor2 == 0 ? alerta_and_reload("Número não pode ser divido por zero") : resposta.innerHTML = `<h2>Resultado: ${valor1 / valor2}</h2>`;
    }
    else{
        alerta_and_reload("Escolha uma operação valida")
    }
}