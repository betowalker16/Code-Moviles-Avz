const axios = require('axios');
const fs = require('fs')
const filePath = './DB/data.json'

class Busquedas {
    historial = [];

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

    guardaBase = (lugar) => {
        fs.writeFileSync(filePath,JSON.stringify(lugar))
    }

    restauraBase = () => {
        if(!fs.existsSync(filePath))
                return null;

        const lugares = fs.readFileSync(filePath, {encoding: 'utf-8'})
        return JSON.parse(lugares)
    }

}

module.exports = Busquedas;