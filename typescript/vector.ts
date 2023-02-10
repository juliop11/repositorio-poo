// • Atributo Privado:

// - elements: array of numbers.

// • El Constructor debe contener los siguientes parámetros:

// - n: number. Longitud del vector.
// - k: number. Máximo valor de los elementos del vector.
// Este constructor tiene que crear el atributo elements formado por n números aleatorios entre 0 y k.

class Vector {

    private elements: Number[];

    constructor(n: number, k: number) {

        this.elements = [];

        for (let i = 0; i < n; i++) {

            this.elements.push(Math.round(Math.random() * k))
        }
    }
    public print() {

        return this.elements;
    }

    // public add(v1: number[]): number {

    //     let total = 0;
    //     let array1 = [];

    //     for (let i = 0; i < v1.length; i++) {

    //         total[i] = array1[i] + v1[i]
    //         return total;
    //     }
    // }
}
let array: Vector = new Vector(5, 20);
 console.log(array.print());
// console.log(array.add([2, 3, 4, 5, 6]));


