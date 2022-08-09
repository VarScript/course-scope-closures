//
var firstName; //undefine, no hay nada asignado
firstName = 'Fabio';
console.log(firstName);

var lastName = 'David'; //declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarando / asignanndo
var secondName = 'Ana'; // reasignando
console.log(secondName); 


// Let
let fruit = 'Apple'; // decalrar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);
//let fruit = 'Banana'; // no es posible redeblarar con let


// Const
const animal = 'Dog'; // decalrar y asignar
animal = 'cat'; //no se puede redeclarar
console.log(animal);

// Sugun el uso que se tenga se puede trabajar
const vehicles = [];
vehicles.push('car'); // se anade al arreglo
console.log(vehicles);

vehicles.pop(); // se elimina del arreglo
console.log(vehicles);