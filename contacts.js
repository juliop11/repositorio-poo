class Contacts {
    constructor() {
        this.contactos = []
    }

    printPerson() {
        for (let array of this.contactos) {
            array.printAll();
        }
    }
}

module.exports = { Contacts };
