// var nombreObjeto = {
//     atributo:valor,
//     nombre:"Roberto",
//     metodos: function (){ },
//     otroObjeto:{}
// }

// nombreObjeto.nombre;

persona = new Object ();

persona["nombre"] = "Roberto";
persona["apellido"] = "Ramirez";

console.log(persona);

var campo = "nombre";

console.log(persona[campo]);