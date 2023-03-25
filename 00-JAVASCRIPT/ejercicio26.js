var a = 5; 
console.log(typeof(a));

var b = "saludos";
console.log(typeof(b));

var c = {};
console.log(typeof(c));

var d = [];
console.log(typeof(d));
console.log(Object.prototype.toString.call(d));

function persona (nombre) {
    this.nombre = nombre
}


var e = new persona("Roberto");

console.log(typeof(e));