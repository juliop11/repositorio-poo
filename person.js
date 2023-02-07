//• Guardar la clase Person en un fichero con extensión .js (person.js).
//• Modificar ese fichero para exportar la clase.
//• Importar la clase en otro fichero denominado personTest.js.
//• Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
//• Sube todos los cambios a tu rama “dia1”


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

    calcularIMC() {
        return (this.altura * 2) / this.peso;
    }

    calcularEdad(año) {
        return año - this.edad;
    }

    printAll() {
        console.log("Edad- " + this.edad);
        console.log("Altura- " + this.altura);
        console.log("Peso- " + this.peso);
    }

    printHobbies() {

        for (let i = 0; i < this.hobbies.length; i++) {

            console.log(this.hobbies[i]);
        }

    }

}
module.exports = {persona};