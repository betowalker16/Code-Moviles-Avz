var persona = {
    nombre: "Roberto",
    apellido: "Ramirez",
    getNombre: function () {
        var nombreCompleto = this.nombre + ' ' + this.apellido;
        return nombreCompleto;
    }
}

var logNombre = function (lang) {
    console.log("Logged " + this.getNombre(lang));
}

logNombre.call(persona, "español");