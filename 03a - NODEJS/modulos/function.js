const fs = require('fs');

const crearArchivo = async(base = 5, limite = 10,listar=true) => {

    let salida = '';

    for (let i = 1; i <= limite; i++) {
        salida += `${base} ${'*'} ${i} ${'='} ${ base * i}\n`;
    }

    try {
        fs.writeFileSync(`Tabla del ${base}.txt`, salida);
    } catch (error) {
        return error;
    }

    if(listar){
        console.log(`=====================`);
        console.log(`=  tabla del ${base}      =`);
        console.log(`=====================`);
        console.log(salida)
        return `tabla del ${base}.txt`
    }
    else{
        return `tabla del ${base}.txt`
    }
};

module.exports = {
    crearArchivo
};

