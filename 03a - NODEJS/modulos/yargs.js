const argv = require('yargs')
.option('b',{
    alias: 'base',
    demandOption: true,
    default: 5,
    describe: 'base de la tabla de multiplicar',
    type: 'number'
})
.option('lim',{
    alias: 'limite',
    demandOption: true,
    default: 10,
    describe: 'limite de la tabla de multiplicar',
    type: 'number'
})
.option('list', {
    alias: 'listar',
    demandOption: true,
    default: true,
    description: 'Imprime el resultado en la pantalla',
    type: 'boolean'
})

.check( (argv, option) => {
    if (isNaN(argv.base)) {
        throw 'El argumento de la base no es un numero'
    }
    else if (isNaN(argv.limite)) {
        throw 'El argumento del limite no es un numero'
    }
    return true
})
.argv;  

module.exports = {
    argv
}