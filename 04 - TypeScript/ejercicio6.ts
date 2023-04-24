interface Nombre {
    nombre: string
    apellido: string
}


class Persona {
    private nombreP: Nombre
    private edad: number
    public constructor(datos: Nombre,edad: number) {
        this.nombreP = datos
        this.edad = edad
    }

    public getNombre() : string {
        return this.nombreP.nombre
    }

    public setNombre(nombre : string): void {
        this.nombreP.nombre = nombre
    }

    public get Edad() : number {
        return this.edad
    }

    public set Edad(edad: number) {
        this.edad = edad
    }

    public toString(): string {
        return "Nombre: " + this.nombreP.nombre + ", " + this.edad
    }
}

// var persona1 = {nombre: 'Roberto', apellido: 'Ramirez'} 

// var Roberto = new Persona(persona1,22)
var Juan =new persona('Juan',10)