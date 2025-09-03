// Refer to Task 4 in your Instructions to complete this task

const prompt = require("prompt-sync")();
const name = prompt("Ingresa tu nombre: ");
console.log(`¡Hola ${name}! aquí tienes la lista del 1 al 105 mostrando las posibles combinaciones, siguiendo el siguiente orden Fizz --> Buzz --> Woof: `);

for (let i = 1; i <= 105; i++) {
    let output = "";
       if (i % 3 === 0){
        output += "Fizz";
    }  if (i % 5 === 0){
        output += "Buzz";
    }  if (i % 7 === 0){
        output += "Woof";
    }  if (output === "") {
        console.log(i);
    }  else {
        console.log(output);
    }
       
  }

