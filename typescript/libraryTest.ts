import { Library } from "./library"
import { Book } from "./book"

let libro1: Book = new Book('El castillo ambulante ', 123, '123456789', 'miyazaky', 'ghibli');
let libro2: Book = new Book('La paloma blanca', 350, '3354635', 'juampe', 'camper');

let libros: Library = new Library("calle pena", "antonio");
libros.setBooks([libro1,libro2])


console.log(libros.findByAuthor('miyazaky'));
console.log(libro1.toString());
console.log(libros.getNumberOfBooks());
console.log(libros.getBooks());
