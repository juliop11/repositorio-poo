export class Person {

    name: string;
    age: number;
    private address: string

    constructor(nombre: string, edad: number, direccion: string) {
        this.name = nombre;
        this.age = edad;
        this.address = direccion;
    }
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




