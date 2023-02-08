class Person {

    public name: String;
    public age: Number;
    private address: string

    constructor(nombre: string, edad: number, direccion: string) {
        this.name = nombre;
        this.age = edad;
        this.address = direccion;
    }
    public printName(){
        return this.name
    }
    //public yearOfBirth(currentYear: number): number{

    //}
}

//let direccion: Person = new Person("julio", 35, "calle ancha")
console.log(printName());
