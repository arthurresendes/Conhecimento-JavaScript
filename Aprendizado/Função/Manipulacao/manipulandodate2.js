var data = new Date()

document.write(data.toString())

data.setDate(data.getDate() + 365)
document.write("<hr>")
document.write(data.toString())


document.write("<hr><br><br>")

var data1 = new Date(2026, 0 ,15)
document.write("<hr>")
document.write(data1)

var data2 = new Date(2026, 1 ,23)
document.write("<hr>")
document.write(data2)

document.write("<hr>")
document.write(data1.getTime())

document.write("<hr>")
document.write(data2.getTime())

document.write("<hr>")
var milisegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milisegundos_entre_datas)

document.write("<hr>")
milisegundos_por_dia = 1*24*60*60*1000
document.write("1 dia tem: " + milisegundos_por_dia + ' milisegundos')

document.write("<br><br><br>")
document.write('A diferença entre data1 e data2 é de: ' + Math.ceil(milisegundos_entre_datas / milisegundos_por_dia) + ' dias')


