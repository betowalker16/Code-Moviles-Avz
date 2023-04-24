"use strict";
class Empleado {
    constructor(nom, pos = 'Desarrollador', sal) {
        this.nombre = nom;
        this.puesto = pos;
        if (sal) {
            this.salario = sal;
        }
        else {
            this.salario = 0.0;
        }
    }
}
