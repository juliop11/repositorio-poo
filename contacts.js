let {Persona} = require("./person");

class Contacts {
    constructor() {
        this.contactos = []
    }

    printPerson() {
    
        for (let i = 0; i < this.contactos.length; i++) {
            console.log(this.contactos[i]);
        }
    }
}

module.exports = { Contacts };
