// Refer to Task 2 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre: ");
console.log(`¡Hola ${name}! aquí tienes la lista del 1 al 105 mostrando los números que sean divisibles entre 3 como "Fizz": `);

for (let i = 1; i <= 105; i++) {
    
    if (i % 3 === 0 ){
      
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }