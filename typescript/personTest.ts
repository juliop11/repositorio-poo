import { Person } from "./person"


let person: Person = new Person("julio", 35, "calle ancha");

console.log(person);
console.log(person.yearOfBirth(2023));
person.setAdress("calle bureba");
console.log(person.getAddress());
person.printName();
