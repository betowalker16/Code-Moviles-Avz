"use strict";
class persona1 {
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
    get Edad() {
        return this.edad;
    }
    set Edad(edad) {
        this.edad = edad;
    }
    toString() {
        return "Nombre: " + this.nombre + ", " + this.edad;
    }
}
var Roberto = new persona('Roberto', 22);
var Juan = new persona('Juan', 10);
