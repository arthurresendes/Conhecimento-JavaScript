function result(){
    const ano_nascimento = Number(document.getElementById('ano_nasc').value);

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    const radioSelecionado = document.querySelector('input[name="genero"]:checked');
    const genero = radioSelecionado.value;

    if(genero == 'masculino'){
        document.getElementById("idadegenero").innerHTML =`Homem com ${anoAtual-ano_nascimento} anos`;
    }else if(genero == 'feminino'){
        document.getElementById("idadegenero").innerHTML =`Mulher com ${anoAtual-ano_nascimento} anos`;
    }else{
        document.getElementById("idadegenero").innerHTML =`Pessoa com ${anoAtual-ano_nascimento} anos`;
    }
}