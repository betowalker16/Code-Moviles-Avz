var persona = {
    nombre: "Roberto",
    apellido: "Ramirez",
    getNombre: function () {
        var nombreCompleto = this.nombre + ' ' + this.apellido;
        return nombreCompleto;
    }
}


var logNombre = function () {
    console.log("Logged " + this.getNombre());
}

var nombreLog = logNombre.bind(persona);

nombreLog();