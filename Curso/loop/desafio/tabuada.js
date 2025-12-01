number = parseInt(prompt("Digite um numero para ver sua tabuada: "))

let i = 1
while(i < 11){
    document.write(number + " x " + i + " = " + number*i)
    document.write("<br><br>")
    i+=1;
}