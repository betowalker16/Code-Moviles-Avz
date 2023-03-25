var persona = {
    nombre: "Roberto",
    apellido: "Ramirez",
    getNombre: function (lang) {
        var nombreCompleto = this.nombre + ' ' + this.apellido + ' (' + lang + ')';
        return nombreCompleto;
    }
}

var logNombre = function (lang) {
    console.log("Logged " + this.getNombre(lang));
}

logNombre.apply(persona, ["español"]);