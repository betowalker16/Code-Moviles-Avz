const fs = require('fs')
const { stringify } = require('querystring')

const filePath = './DB/data.json'

const guardabase = (data) => {
    fs.writeFileSync(filePath,JSON.stringify(data))
} 

const cargabase = () => {
    if(!fs.existsSync(filePath))
        return null;

    const tareas = fs.readFileSync(filePath, {encoding: 'utf-8'})
    return JSON.parse(tareas)

}
module.exports = {guardabase, cargabase}