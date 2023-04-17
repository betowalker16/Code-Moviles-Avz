const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada,listadoSeleccionar, listadoTareasBorrar, confirmar} = require('./js/inquirer');
const tareas = require('./modelos/tareas.js');
const { guardabase, cargabase } = require('./js/guardabase.js');
const tarea = require('./modelos/tarea');


const main = async() => {
    let opc = 0;
    console.clear();
    const Tareas = new tareas()

    do {
        opc = await inquirerMenu();
        const tareasdb = await cargabase()

        if (tareasdb) {
            await Tareas.cargarListado(tareasdb)
        }
        
        switch (opc) {
            case 1:
                const resp = await capturaEntrada('Descripcion: ')
                Tareas.crearTarea(resp)
                break;
            case 2:
                Tareas.imprimeTarea()
                break
            case 3:
                Tareas.imprimePendientesCompletadas(true)
                break
            case 4:
                Tareas.imprimePendientesCompletadas(false)
                break
            case 5:
                const ids = await listadoSeleccionar(Tareas.listadoArr)
                Tareas.CambiaEstadoTareas(ids)
                break
            case 6: 
                const id = await listadoTareasBorrar(Tareas.listadoArr)
                if (id === 0)
                    break
                const ok = await confirmar('¿Desea borrar la tarea?')
                if (ok){
                    Tareas.borrarTarea(id)
                    console.log('Tarea borrada'.red)
                }
                break
            }
            guardabase(Tareas.listadoArr)
    } while (opc !== 0);

    await pausa();
};

main();