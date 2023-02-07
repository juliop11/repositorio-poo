let { contact } = require("./contacts");
let { persona } = require("./person");

let jose = new persona(1.70, 75);
jose.edad = 1995;
jose.hobbies = ["futbol", "tenis"];

let pedro = new persona(1.90, 90);
pedro.edad = 1990;
pedro.hobbies = ["correr", "playa"];

let agenda = new contact()

agenda.contactos.push(jose)
agenda.contactos.push(pedro)
console.log(agenda.contactos);

