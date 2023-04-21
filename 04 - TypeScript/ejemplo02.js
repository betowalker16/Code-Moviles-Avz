"use strict";
//Tipos de Datos en Typescript
var nombre = 'Roberto Ramirez';
var edad = 500;
var programador = true;
var lenguajes = ['javascript', 'TypeScript', 'NodeJS', 'PHP'];
var pareja = ["edad", 30];
var meses;
(function (meses) {
    meses[meses["Enero"] = 0] = "Enero";
    meses[meses["Febrero"] = 1] = "Febrero";
    meses[meses["Marzo"] = 2] = "Marzo";
    meses[meses["Abril"] = 3] = "Abril";
})(meses || (meses = {}));
var calendario = meses.Abril;
var nada = undefined;
var temporal = edad;
temporal = nombre;
var Null = null;
var Undefined = undefined;
// document.getElementById('output')?.innerHTML = nombre + ", Edad: " + edad + ", Programa en: " + lenguajes[0]
