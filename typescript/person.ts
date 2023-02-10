<<<<<<< HEAD
class Person {

    public name: String;
    public age: Number;
=======
export class Person {

    name: string;
    age: number;
>>>>>>> dia2
    private address: string

    constructor(nombre: string, edad: number, direccion: string) {
        this.name = nombre;
        this.age = edad;
        this.address = direccion;
    }
<<<<<<< HEAD
    public printName(){
        return this.name
    }
    //public yearOfBirth(currentYear: number): number{

    //}
}

//let direccion: Person = new Person("julio", 35, "calle ancha")
console.log(printName());
=======
    printName() {
        console.log(this.name);

    }
    yearOfBirth(currentYear: number): number {
        return currentYear - this.age;
    }
    public setAdress(address: string): void {
        this.address = address;
    }
    public getAddress(): string {
        return this.address
    }
}




>>>>>>> dia2
