import { Person } from "./person"
import { Contacts } from "./contacts"

let person1: Person = new Person("carlos", 20, "calle santa");
let person2: Person = new Person("laura", 45, "calle ambar");
let agenda: Contacts = new Contacts();

agenda.people.push(person1);
agenda.people.push(person2);
agenda.printCalendar();