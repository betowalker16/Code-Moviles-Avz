const fs = require('fs')
const axios = require('axios')
class Busquedas {
    historial = []
    filePath = './DB/data.json'


    constructor() {
    }

    async ciudad( lugar = '') {
        const consulta = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params: {
                'limit': 5,
                'language': 'es',
                'access_token': process.env.MAPBOX_KEY
            }
        });
        const resp = await consulta.get();
        return resp.data.features.map( (ubicacion) => ({
            id: ubicacion.id,
            lugar: ubicacion.place_name_es,
            lon: ubicacion.center[0],
            lat: ubicacion.center[1]
        }) );
    }

    climaCiudad = async (lat, lon) => {
        const consulta = axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather`,
            params: {
                'lat': lat,
                'lon': lon,
                'appid': process.env.OPENWEATHER,
                'units': 'metric',
                'lang': 'es'
            }
        });
        const resp = await consulta.get();
        return {
            desc: resp.data.weather[0].description,
            temp: resp.data.main.temp,
            real: resp.data.main.feels_like,
            hum: resp.data.main.humidity
        }
    }

    guardarBusquedas = (lugar = '') => {
        if (this.historial.includes(lugar)) {
            return
        }
        this.historial.unshift(lugar)
    }

    guardaBase = () => {
        const baseDatos = {
            'historial': this.historial
        }
        try {
            fs.writeFileSync(this.filePath,JSON.stringify(baseDatos))
        } catch (error) {
            throw error
        }
    }

    restauraBase = () => {
    }

}

module.exports = Busquedas;