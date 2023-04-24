class Empleado {
    private nombre: string
    private puesto: string
    private salario: number

    constructor(nom: string, pos: string = 'Desarrollador', sal?: number) {
        this.nombre = nom
        this.puesto = pos
        if (sal) {
            this.salario = sal
        } else {
            this.salario = 0.0
        }
    }
}