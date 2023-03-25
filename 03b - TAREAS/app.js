const colors = require('colors');
const { inquirerMenu, pausa, capturaEntrada} = require('./js/inquirer');
const tareas = require('./modelos/tareas.js');


const main = async() => {
    let opc = 0;
    console.clear();
    const Tareas = new tareas()

    do {
        opc = await inquirerMenu();
        switch (opc) {
            case 1:
                const resp = await capturaEntrada('Descripcion: ')
                Tareas.crearTarea(resp)
                break;
            case 2:
                console.log(Tareas.listadoArr)
                break;
        
            default:
                break;
        }
    } while (opc !== 0);

    await pausa();
};

main();