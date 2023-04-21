//Tipos de Datos en Typescript

var nombre: String = 'Roberto Ramirez'
var edad: number = 500
var programador: boolean = true
var lenguajes: Array<string> = ['javascript','TypeScript','NodeJS','PHP']

var pareja: [String, Number] = ["edad",30]

enum meses {Enero, Febrero, Marzo, Abril}
var calendario : meses = meses.Abril

var nada: void = undefined
var temporal: any = edad
temporal = nombre

var Null: null = null
var Undefined: undefined = undefined

// document.getElementById('output')?.innerHTML = nombre + ", Edad: " + edad + ", Programa en: " + lenguajes[0]
