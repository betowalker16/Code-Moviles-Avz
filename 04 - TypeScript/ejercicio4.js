"use strict";
class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
}
var Roberto = new persona('Roberto', 22);
var Juan = new persona('Juan', 10);
