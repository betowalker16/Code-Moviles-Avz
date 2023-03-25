// callbacks

console.clear()

let getUsuario = (id, callback) => {
    let usuario = {
        id,
        nombre: "roberto"
    };
    setTimeout(() => {callback(usuario)}, 2000);
};

getUsuario(3445147, (usuario) => {
    console.log(usuario.id, usuario.nombre);
});