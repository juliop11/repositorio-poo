// • Atributo Privado:

// - elements: array of numbers.

// • El Constructor debe contener los siguientes parámetros:

// - n: number. Longitud del vector.
// - k: number. Máximo valor de los elementos del vector.
// Este constructor tiene que crear el atributo elements formado por n números aleatorios entre 0 y k.

//print(). Imprime por consola el vector.
//add(v1:Vector):Vector. Realiza la suma de elements con v1.
//subs(v1:Vector):Vector. Realiza la resta de elements con v1.
//mult(v1:Vector):Vector. Realiza el producto de elements y v1.
//multNumber(n:number):Vector. Realiza el producto entre elements y el número n.

export class Vector {

    private elements: number[];

    constructor(n: number, k: number) {

        this.elements = [];

        for (let i = 0; i < n; i++) {

            this.elements.push(Math.round(Math.random() * k))
        }
    }

    public print() {

        return this.elements;
    }

    public add(v1: number[]): number[] {

        let total: Vector = new Vector(0, 0);

        for (let i = 0; i < v1.length; i++) {

            if (this.elements.length == v1.length) {

                total.elements.push(this.elements[i] + v1[i])
            }
        }
        return total.elements;
    }

    
    public subs(v1:number[]): number[] {

        let total1: Vector = new Vector(0, 0);

        for (let i = 0; i < v1.length; i++) {

            if (this.elements.length == v1.length) {

                total1.elements.push(this.elements[i] - v1[i])
            }
        }
        return total1.elements;
    }

    public mult(v1: number[]): number[] {

        let total2: Vector = new Vector(0, 0);

        for (let i = 0; i < v1.length; i++) {

            if (this.elements.length == v1.length) {

                total2.elements.push(this.elements[i] * v1[i])
            }
        }
        return total2.elements;
    }

    public multNumber(n: number): Vector {

        let array1: Vector = new Vector(0, 0);


        for (let i = 0; i < this.elements.length; i++) {

            array1[i] = this.elements[i] * n;

        }
        return array1;
    }
}
