let infoCurso= {
    "titulo": "Aprendo Node.js",
    "NumVistas": 12345,
    "NumLikes": 852,
    "temas": [
        "JavaScript",
        "node.js"
    ],
    "esPublico":true

}
//convertir este objeto en un texto -> cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso)
console.log(typeof infoCursoJSON)


//CADENA DE CARACTERES -> Objeto
let infoCursoObj = JSON.parse(infoCursoJSON)
console.log(typeof infoCurso)