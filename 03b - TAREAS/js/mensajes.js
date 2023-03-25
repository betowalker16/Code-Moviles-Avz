const color = require('colors')
const { read } = require('fs')

const mostrarMenu = () => {
    return new Promise((resolve) => {
        console.clear()
        console.log('==========================='.bgCyan)
        console.log('*  Seleccione una opcion  *'.bgCyan)
        console.log('==========================='.bgCyan)
        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green}  Listar tarea`)
        console.log(`${'3.'.green}  Listar tareas terminadas `)
        console.log(`${'4.'.green}  Listar tareas pendientes`)
        console.log(`${'5.'.green}  Completas tarea`)
        console.log(`${'6.'.green} Borrar tarea`)
        console.log(`${'0.'.green} Salir`)


        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opcion\n', (answer) => {
            readline.close()
            resolve(answer)
        })
    })
    
}


const pausa = () => {

    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Presione ${'ENTER'.yellow} para continuar \n`, (answer) => {
            readline.close()
            resolve(answer)
        })
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}