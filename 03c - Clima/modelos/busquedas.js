const axios = require('axios')

class busquedas {
    historial = []

    constructor() {

    }

    async ciudad ( lugar = '') {
        const consulta = axios.create({ 
            baseUrl: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?`,
            params: {
                'limit': 5,
                'language': 'es',
                'access_Token': 'pk.eyJ1IjoiYmV0b3dhbGtlciIsImEiOiJjbGdiNm4ydjMxMHBoM25vd2ZtbDRldjUwIn0.rp5XgKAykZvp6t2qdsz92A'
            }
        })
        const respuesta = await consulta.get()
        
        return respuesta.data.features.map((ubicacion) => ({
            id: ubicacion.id,
            lugar: ubicacion.place_name_es,
            longitud: ubicacion.center[0],
            latitud: ubicacion.center[1]
        }) )
    }

    climaCidad = async (lat, lon) =>{
        const consulta = axios.create({
            baseUrl: `https://api.openweathermap.org/data/2.5/weather`,
            params: {
                'lat': lat,
                'lon': lon,
                'appid': process.env.OPENWEATHER,
                'units': 'metric',
                'lang': 'es'
            }
        })
        const resp = await consulta.get()
        return {
            desc: resp.data.weather[0].description,
            temp: resp.data.main.temp,
            real: resp.data.main.feels_like,
            hum: resp.data.main.humidity
        }
    }
}

module.exports = busquedas