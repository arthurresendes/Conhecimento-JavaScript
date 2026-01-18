num = prompt("Digite um numero de 1 a 10!")

while (num > 10 || num < 0) {
    num = prompt("Digite um numero de 1 a 10!")
}

if (num == 5) {
    document.write("Era o numero que eu pensei")
} else {
    document.write("Não era o numero que pensei")
    document.write("<br/><hr/>")
    if (num < 5) {
        document.write("O seu numero é menor doq eu pensei")
    } else {
        document.write("O seu numero é maior doq eu pensei")
    }
}
