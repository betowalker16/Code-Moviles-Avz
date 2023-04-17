const colors = require('colors')
const {inquirerMenu, capturaEntrada, pausa, listadoCiudades} = require('./js/inquirer')
const Busquedas = require('./modelos/busquedas')
const axios = require('axios')


const main = async () => {
    let resp
    const busquedas = new Busquedas()

    do {
        resp = await inquirerMenu()
        switch (resp) {
            case 1:
                const lugar = await capturaEntrada('ciudad: ')
                const lugares = await busquedas.ciudad(lugar)
                const id  = await listadoCiudades(lugares)
                const lugarSeleccionado = lugares.find( (ciudad) => ciudad.id === id )
                const clima = await busquedas.climaCidad(lugarSeleccionado.latitud,lugarSeleccionado.longitud)
                console.log(lugares);
                console.log(`\n ${'ciudad: '.yellow} ${lugarSeleccionado.lugar}`)
                console.log(`\n ${'latitud: '.yellow} ${lugarSeleccionado.latitud}`)
                console.log(`\n ${'longitud: '.yellow} ${lugarSeleccionado.longitud}`)

                await pausa()
            break;
            case 2:
                
            break;
        }
        if (resp === 0) {
            await pausa()
        }
    } while (resp != 0);
}

main()