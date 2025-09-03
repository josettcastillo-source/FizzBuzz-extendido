// Refer to Task 1 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre: ");
console.log(`¡Hola ${name}! aquí tienes la lista de números del 1 al 105: `);


for (let i = 1; i <= 105; i++) {
    console.log(i);
  }
