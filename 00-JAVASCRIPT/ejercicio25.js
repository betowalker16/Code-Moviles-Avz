function persona(nombre, apellido) {
    this.nombre = nombre,
    this.apellido = apellido
}

persona.prototype.getFullName = function () {
    return this.nombre + ' ' + this.apellido;
}

var juan = new persona("Juanito", "Perez");
var pedro = new persona("Pedrito", "Lopez");

console.log(juan);
console.log(pedro);
console.log(juan.getFullName());
console.log(pedro.getFullName());