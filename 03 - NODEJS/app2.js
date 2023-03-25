// Funciones fecha

function suma(a, b) {
    return a + b;
}

let suma1 = function (a , b) {
    return a + b;
}

let suma2 = () => {
    return a + b;
}

let suma3 = () => a + b;

console.log(suma(4, 5));
console.log(suma1(4, 5));
console.log(suma2(4, 5));
console.log(suma3(4, 5));