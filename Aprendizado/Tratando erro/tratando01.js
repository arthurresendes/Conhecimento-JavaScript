try{
    number = 0
    while(number > 10 || number < 1){
            number = parseInt(prompt("Digite um numero entre 1 e 10: "))
    }

    if (isNaN(number)) {
        // Lança um erro para que o bloco catch possa pegá-lo
        throw new Error("Entrada inválida, pois digitou algo que não era um numero inteiro."); 
    }

    if(number == 5){
        document.write("Numero da sorte: " + number)
    }
    else{
        document.write(`Seu numero nao é o mesmo que o meu, seu numero: ${number}, já o meu eh: 5`)
    }
}catch (error){
    document.write(`Digite um numero inteiro entre 1 e 10, detalhe erro ${error}`)
} finally{
    document.write("<br><br>")
    document.write("Codigo executado com sucesso")
}