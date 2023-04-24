"use strict";
class Persona {
    constructor(datos, edad) {
        this.nombreP = datos;
        this.edad = edad;
    }
    getNombre() {
        return this.nombreP.nombre;
    }
    setNombre(nombre) {
        this.nombreP.nombre = nombre;
    }
    get Edad() {
        return this.edad;
    }
    set Edad(edad) {
        this.edad = edad;
    }
    toString() {
        return "Nombre: " + this.nombreP.nombre + ", " + this.edad;
    }
}
// var persona1 = {nombre: 'Roberto', apellido: 'Ramirez'} 
// var Roberto = new Persona(persona1,22)
var Juan = new persona('Juan', 10);
