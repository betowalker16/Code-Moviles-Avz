const tarea = require('./modelos/tarea.js')
const tareas = require('./modelos/tareas.js')

const Tarea = new tarea('comprar libro')

console.log(Tarea)

const Tareas = new tareas()

Tareas.listado[Tarea.id] = Tarea

console.log(Tareas)
