
const { demandOption, describe } = require('yargs');
const { crearArchivo } = require('./modulos/function.js')
const {argv} = require('./modulos/yargs.js');

console.clear();

const base = argv.base
const limite = argv.limite
const listar = argv.listar

crearArchivo(base,limite,listar)
    .then((nombreArchivo) => { console.log(nombreArchivo, 'creado');})
    .catch((err) => { console.log(err);})