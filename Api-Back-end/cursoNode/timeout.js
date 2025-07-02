///Funciones (modulos)
//setTimeOut(function,RTCIceTransport, argumento) 

function mostrarTema(tema){
    console.log("estoy aprendiendo"  ,tema)
}

//mostrarTema("node.js")
//Tarda un segundo en ejecutarse


//setTimeout(mostrarTema,1000,'node')



//puede tener mas argumentos

//setImmediate() -se ejecuta por el ciclo de eventos en node se ejecuta despues del codigo sincrono
console.log('Antes del setImmediate')

setImmediate(mostrarTema,'node.js')

console.log('despues del setImmediate')