//setInterval()
/*
Para ejecutar codigo un num infinito de veces con un retraso 
especifico de milisegundos

setInterval(function,intervalo, arg12, arg2)
*/ 

function mostrarTema(tema){
    console.log("estoy aprendiendo"  ,tema)
}

setInterval(mostrarTema,1500, 'node.js')

