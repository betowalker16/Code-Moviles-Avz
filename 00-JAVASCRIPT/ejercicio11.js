var objetoLiteral = {
    nombre : "roberto",
    edad : 22
}
console.log(objetoLiteral);

var objetoJSON = JSON.stringify(objetoLiteral);
console.log(objetoJSON);

var nuevoObjeto = JSON.parse(objetoJSON);
console.log(nuevoObjeto);