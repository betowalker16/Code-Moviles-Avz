var persona = {
    nombre: "Roberto",
    apellido: "Ramirez",
    getNombre: function (lang) {
        var nombreCompleto = this.nombre + ' ' + this.apellido + ' (' + lang + ')';
        return nombreCompleto;
    }
}

var persona2 = {
    nombre: "Juanito",
    apellido: "Perez"
}

console.log(persona.getNombre.apply(persona2, ["español"]));