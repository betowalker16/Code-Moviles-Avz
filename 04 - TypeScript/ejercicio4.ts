class persona {
    nombre: string
    edad: number
    constructor(nombre: string,edad: number) {
        this.nombre = nombre
        this.edad = edad
    }

    getNombre() : string {
        return this.nombre
    }

    setNombre(nombre : string): void {
        this.nombre = nombre
    }
}

var Roberto = new persona('Roberto',22)
var Juan =new persona('Juan',10)