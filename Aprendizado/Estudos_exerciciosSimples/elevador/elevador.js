
do {
    var andarEsta = window.prompt("Qual andar você esta? (0 a 12)");
} while (andarEsta < 0 || andarEsta > 12);

if (andarEsta == 0) {
    do {
        var paraOndeSubir = window.prompt("Você esta no terreo para onde quer subir: ");
    } while (paraOndeSubir < 1 || paraOndeSubir > 12);
    window.alert("Você agora esta no " + paraOndeSubir + " andar")
} else {
    do {
        var paraQualOpcao = window.prompt("Você esta no " + andarEsta + " andar , você quer subir ou descer (s/d)")
    } while (paraQualOpcao != "s" && paraQualOpcao != "d");
    if (paraQualOpcao == "s") {
        do {
            var subindo = window.prompt("Você ira para qual andar ? ");
            var indoSubindo = subindo - andarEsta;
            window.alert("Você subiu  " + indoSubindo + " andar e esta no " + subindo + " andar" )
        } while (indoSubindo > 12);
    } else {
        do {
            var descendo = window.prompt("Voce ira descer para qual andar ? ")
            if(descendo  == 0){
                window.alert("Você chegou ao terreo ")
                break
            }
            var indoDescendo = andarEsta - descendo
            window.alert("Você chegou ao " + indoDescendo + " andar")
        }while (indoDescendo < 0);
    }
}