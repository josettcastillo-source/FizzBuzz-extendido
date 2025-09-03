// Refer to Task 5 in your Instructions to complete this task
const prompt = require("prompt-sync")();
const x = Number(prompt("Ingrese el número hasta el cual quiere que se muestra esta secuencia Fizz --> Buzz --> Woof: "));

if (isNaN(x) || x <= 0){
  console.log("Por favor ingrese un número válido.");
} else {
  console.log(`Aquí tiene su secuencia: `);
}

for (let i = 1; i <= x; i++) {
    let output = "";
       if (i % 3 === 0){
        output += "Fizz";
    }  if (i % 5 === 0){
        output += "Buzz";
    }  if (i % 7 === 0){
        output += "Woof";
    }  if (output === ""){
        console.log(i);
    }  else {
        console.log(output);
    }  
       
  }