/*modulo fs File System
leer, modificar, copiar, eliminar, cambiar nombre de archivo, crea o mod carpetas
son asyn
no bloquean el proceso del programa
*/
//Leer un archivo
const fs = require('fs')

fs.readFile('inde.html','utf-8', (err, contenido)=>{
    if(err){
        //console.log(err)

        //detener la ejecucion del programa 
        throw err
    }else{
        console.log(contenido)
    }

    console.log('Si tenemos throw se detiene la ejecucion')
})


/*
Renombrar un archivo
fs.rename('index.html','main.html'(err) => {
   if(err){
    throw err}
    }
    console.log('cambio realizado exitosamente')
})  */


fs.writeFile('index.html','contenido nuevo', (err)=>{
    if(err){
        throw err
    }
    else {
        console.log('Cambio realizado exitosamente')
    }
})


///Eliminar un archivo,solo agregar el nombre del archivo y cuando se complete 
///el proceso lanzar el error o el msj de exito
fs.unlink('index.html', (err)=>{
    if(err){
        throw err
    }else{
        console.log('archivo eliminado con exito')
    }
})