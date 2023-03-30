const tarea = require('./tarea.js')

class tareas {
    constructor(test) {
        this.listado = {}
    }

    get listadoArr() {
        const listadoArr = []
        Object.keys(this.listado).forEach( (key) => {
            const Tareas = this.listado[key]
            listadoArr.push(Tareas)
        })
        return listadoArr
    }

    cargarListado = (arreglo) => {
        
        arreglo.forEach( (tarea) => {
            this.listado[tarea.id] = tarea 
        })

    }

    crearTarea = (desc) => {
        const Tarea = new tarea(desc)
        this.listado[Tarea.id] = Tarea
    }

    imprimeTarea = () => {
        let salida = ''
        let cont = 1

        this.listadoArr.forEach( (tarea) => {
            salida = `${cont.toString().green}. ${tarea.desc} ::    `
            if(tarea.completado)
                salida += `${'Completado'.green}`
            else  
                salida += `${'Pendiente'.red}`

            console.log(salida)
            cont++
        })
    }

    imprimePendientesCompletadas = (tipo) => {
        let salida = ''
        let cont = 1

        this.listadoArr.forEach( (tarea) => {
            
            if(tarea.completado && tipo==true){
                salida = `${cont.toString().green}. ${tarea.desc} ::    ${'Completado'.green}`
                console.log(salida)
                cont++
            }
            
            if(!tarea.completado && tipo==false){
                salida = `${cont.toString().green}. ${tarea.desc} ::    ${'Pendiente'.red}`
                console.log(salida)
                cont++
            }

            
        })
    }

    borrarTarea = (id) => {
        if (this.listado[id]) {
            delete this.listado1[id]
        }
    }
}

module.exports = tareas