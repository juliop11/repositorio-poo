//Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
//tener como mínimo 2 parámetros de entrada.
//CLASE

class persona {
    constructor(altura, peso) {
        this.edad
        this.altura = altura
        this.peso = peso
        this.colorPelo
        this.colorPiel
        this.ojos
        this.hobbies
    }


    //Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
    //(índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
    //clase.
    //METODOS

    calcularIMC() {
        return (this.altura * 2) / this.peso;
    }

    calcularEdad(año) {
        return año - this.edad;
    }

    printAll() {
        console.log("Edad- " + juan.calcularEdad(2023));
        console.log("Altura- " + this.altura);
        console.log("Peso- " + this.peso);
    }

    printHobbies() {

        for (let i = 0; i < this.hobbies.length; i++){

            console.log(this.hobbies[i]);
        }

    }

}
//OBJETOS
let juan = new persona(1.84, 95);
juan.edad = 1987;
juan.hobbies = ["coches", "playa"]
console.log(juan);
console.log(juan.calcularIMC());

//Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
//como parámetro el año y calcule la edad de la persona.

console.log(juan.calcularEdad(2023));
//Añadir un método que se denomine printAll que muestre por consola cada uno de los
//atributos de la clase Person seguido por “-” y el valor del atributo.

console.log(juan.printAll());

//Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
//denominado printHobbies, que muestre por consola las aficiones de la persona.

juan.printHobbies();

//• Guardar la clase Person en un fichero con extensión .js (person.js).
//• Modificar ese fichero para exportar la clase.
//• Importar la clase en otro fichero denominado personTest.js.
//• Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
//• Sube todos los cambios a tu rama “dia1”

