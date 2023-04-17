require('dotenv').config();
const colors = require('colors');
const { inquirerMenu, capturaEntrada, listadoCiudades, pausa } = require('./js/inquirer');
const Busquedas = require('./modelos/busquedas');


const main = async() => {
    let resp;
    const busquedas = new Busquedas();
    do {
        resp = await inquirerMenu();
        switch (resp) {
            case 1: const lugar = await capturaEntrada('Ciudad: ');
            const lugares = await busquedas.ciudad(lugar); 
            const id = await listadoCiudades(lugares);
            const lugarSeleccionado = lugares.find( (ciudad) => ciudad.id === id );
            busquedas.guardarBusquedas(lugarSeleccionado.lugar)
            
            const clima = await busquedas.climaCiudad(lugarSeleccionado.lat, lugarSeleccionado.lon);

            console.log(`\n${'Ciudad: '.yellow}: ${lugarSeleccionado.lugar}`);
            console.log(`${'Latitud: '.yellow}: ${lugarSeleccionado.lat}`);
            console.log(`${'Longituf: '.yellow}: ${lugarSeleccionado.lon}`);
            console.log(`${'Clima: '.yellow}: ${clima.desc}`);
            console.log(`${'Temperatura: '.yellow}: ${clima.real}`);
            console.log(`${'Huemedad: '.yellow}: ${clima.hum}`);

            
            await pausa();
            
            break;
            case 2: 
                var cont = 1
                busquedas.historial.forEach( (lugar) => {
                    console.log(`${cont.toString().green}. ${lugar}.`);
                    cont++
                })
            
            break;

        }
        if(resp === 0)
            await pausa();
    } while (resp != 0);
};

main();