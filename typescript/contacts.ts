import { Person } from "./person"

export class Contacts {

    public people: Person[];

    constructor() {

        this.people = []

    }
    printCalendar() {
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i].name);
            console.log(this.people[i].age);
            console.log(this.people[i].getAddress());
        }
    }
}

