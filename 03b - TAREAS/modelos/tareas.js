const tarea = require('./tarea.js')

class tareas {
    constructor(test) {
        this.listado = {}
    }

    get listadoArr() {
        const listadoArr = {}
        Object.keys(this.listado).forEach( (key) => {
            const tarea = this.listado[key]
            listadoArr.push(tarea)
        })
    }

    crearTarea = (desc) => {
        const Tarea = new tarea(desc)
        this.listado[Tarea.id] = Tarea
    }
}

module.exports = tareas