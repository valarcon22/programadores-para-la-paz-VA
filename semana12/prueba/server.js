const fs = require("fs");

const causa = JSON.parse(fs.readFileSync("causa.json", "utf8"));
const apoyo = JSON.parse(fs.readFileSync("apoyo.json", "utf8"));


console.log("===== PETICIÓN EN 3 CLICS =====");

console.log("Nueva causa registrada:");
console.log(causa.titulo);

console.log("Fecha:");
console.log(causa.fecha);

console.log("Estado:");
console.log(causa.estado);


console.log("------------------------------");

console.log("Nuevo apoyo ciudadano:");
console.log(apoyo.nombre);


console.log("------------------------------");

console.log("NOTIFICACIÓN:");

console.log("La causa fue registrada correctamente.");