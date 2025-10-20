var a = 10
var b = 20
var c = null
document.write('A: ', a, '<br/>')
document.write("\n")
document.write('B: ', b, '<br/>')
document.write("\n")
document.write('C: ', c, '<br/>')

c = a
a = b
b = c
document.write("\n")
document.write('A: ', a, '<br/>')
document.write("\n")
document.write('B: ', b, '<br/>')
document.write("\n")
c = null
document.write('C: ', c, '<br/>')
