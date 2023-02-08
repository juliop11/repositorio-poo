let {Persona} = require("./person");

let juan = new Persona(1.84, 95);
juan.edad = 1987;
juan.hobbies = ["coches", "playa"]
console.log(juan.calcularIMC());
console.log(juan.calcularEdad(2023));
console.log(juan.printAll());
juan.printHobbies();

