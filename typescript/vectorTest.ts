import { Vector } from "./vector"

let vector: Vector = new Vector(5, 20);
let v1: number[] = [1, 2, 3, 4, 5];

console.log(vector.print());
console.log(vector.add(v1));
console.log(vector.subs(v1));
console.log(vector.mult(v1));
console.log(vector.multNumber(2))