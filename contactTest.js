let { Contacts } = require("./contacts");
let { Persona } = require("./person");

let jose = new Persona(1.70, 75);
jose.edad = 1995;
jose.hobbies = ["futbol", "tenis"];

let pedro = new Persona(1.90, 90);
pedro.edad = 1990;
pedro.hobbies = ["correr", "playa"];

let agenda = new Contacts()

agenda.contactos.push(jose)
agenda.contactos.push(pedro)
console.log(agenda.contactos);
console.log('print person *******************************');
agenda.printPerson();
