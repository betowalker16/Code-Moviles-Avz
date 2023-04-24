class persona1 {
    nombre: string
    edad: number
    public constructor(nombre: string,edad: number) {
        this.nombre = nombre
        this.edad = edad
    }

    public getNombre() : string {
        return this.nombre
    }

    public setNombre(nombre : string): void {
        this.nombre = nombre
    }

    public get Edad() : number {
        return this.edad
    }

    public set Edad(edad: number) {
        this.edad = edad
    }

    public toString(): string {
        return "Nombre: " + this.nombre + ", " + this.edad
    }
}

var Roberto = new persona('Roberto',22)
var Juan =new persona('Juan',10)