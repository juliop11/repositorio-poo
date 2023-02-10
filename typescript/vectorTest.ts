import { Vector } from "./vector"

let array: Vector = new Vector(5, 20);
let v1: number[] = [1, 2, 3, 4, 5];
console.log(array.print());
console.log(array.add(v1));
console.log(array.subs(v1));
console.log(array.mult(v1));
console.log(array.multNumber(2))