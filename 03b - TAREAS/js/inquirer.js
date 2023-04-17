const inquirer = require('inquirer');
const colors = require('colors');

const menu = [
    {
        type: 'list',
        name: 'menuOpt',
        message: 'Seleccione una Opción: ',
        choices: [
            {
                value: 1,
                name: `${"1.".green} Crear Tarea`
            },
            {
                value: 2,
                name: `${"2.".green} Listar Tareas`
            },
            {
                value: 3,
                name: `${"3.".green} Listar Tareas terminadas`
            },
            {
                value: 4,
                name: `${"4.".green} Listar Tareas pendientes`
            },
            {
                value: 5,
                name: `${"5.".green} Completar tareas`
            },
            {
                value: 6,
                name: `${"6.".green} Borrar tarea`
            },
            {
                value: 0,
                name: `${"0.".green} Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.log("=========================".green);
    console.log("= Seleccione una opción =".green);
    console.log("=========================\n".green);

    const {menuOpt} = await inquirer.prompt( menu );
    
    return menuOpt;

};

const capturaEntrada = async (message) => {
    respuesta = await inquirer.prompt([{
        type: 'input',
        name: 'resp',
        message,
        validate: (entrada) => {
            if (entrada.length === 0) {
                return 'Entrada invalida. Reintente'
            }
            else {
                return true
            }
        }
    }])

    return respuesta.resp
}


const pausa = async() => {
    await inquirer.prompt([{
        type: 'input',
        name: 'pauseOpt',
        message: `Presione ${'ENTER'.green} para continuar`
    }])
};

const listadoSeleccionar = async (listado) => {

    const choices = listado.map( (tarea) => {
        return {
            value: tarea.id,
            name: tarea.desc,
            checked: (tarea.completado) ? false : true 
        }
    })

    const respuesta = await inquirer.prompt([{
        type: 'checkbox',
        name: 'resp',
        message: 'Marque las tareas completadas',
        choices
    }])


    return respuesta.resp
}

const listadoTareasBorrar = async (listadoTareas = []) => {
    var contador = 0
    const choices = listadoTareas.map( (tarea) => {
        contador++
        return {
            value: tarea.id,
            name: `${contador.toString().green}.  ${tarea.desc}`
        }
    })

    choices.unshift({
        value: 0,
        name: `${'0'.green}. ${'Cancelar'.yellow}`
    })

    const respuesta = await inquirer.prompt([{
        type: 'list',
        name: 'resp',
        message: '¿Que tarea desea borrar?',
        choices
    }])

    return respuesta.resp
}

const confirmar = async (message) => {
    const { ok } = await inquirer.prompt([{
        type: 'confirm',
        name: 'ok',
        message 
    }])

    return ok
}

module.exports = {
    inquirerMenu, 
    pausa,
    capturaEntrada,
    listadoSeleccionar,
    listadoTareasBorrar,
    confirmar
}