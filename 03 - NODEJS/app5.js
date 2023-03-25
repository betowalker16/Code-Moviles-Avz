// Callbacks hells

console.clear();

const empleados = [
    {
        id: 1,
        nombre: "Roberto"
    },
    {
        id: 2,
        nombre: "Benjamin"
    },
    {
        id: 3,
        nombre: "Felipe"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
            
        const empleado = empleados.find( (e) => e.id === id)?.nombre;
        (empleado)? resolve(empleado) : reject(`Error: El empleado con id (${id}) no existe`)
    })
};

const getSalario = (id) => {

    return new Promise( (resolve, reject) => {
            
        const salario = salarios.find( (s) => s.id === id )?.salario;
        (salario)? resolve(salario) : reject(`Error: El salario con id (${id}) no existe`)
    })
};

const id = 2

const getInfoUsuario = async(id) => {
    const empleado = await getEmpleado(id)
    const salario = await getSalario(id)
    return `el empleado ${empleado} tiene un salario de ${salario}`
}

getInfoUsuario(id).then( (info) => { console.log(info);})
                    .catch( (err) => { console.log(err);} )
// let emp = ''

// getEmpleado(id).then((empleado) => {
//     emp = empleado
//     return getSalario(id)}).then((salario) =>{ 
//         console.log(`el empleado ${emp} tiene un salario de ${salario}`)})
//         .catch( () => { console.log(`El empleado ${emp} no tiene salario.`)})





// getEmpleado(id)
//         .then( (empleado) => {
//             getSalario(id)
//                     .then( (salario) => { console.log(`el empleado ${empleado} tiene un salario de ${salario}`) })
//                     .catch( () => { console.log(`El empleado ${empleado} no tiene salario.`)}) 
//         })
//         .catch( (err) => {console.log(err) })



// getEmpleado(id, (err, empleado) => {
//     if(err)
//     {
//         return console.log(err);
//     }

//     getSalario(id, (err, salario) => {
//         if(err)
//         {
//             return console.log(`El empleado ${empleado.nombre} no tiene salario.`);

//         }
//         console.log(`el empleado ${empleado.nombre} tiene un salario de ${salario.salario}`);
//     });

// });

