// variables

let a; //declarar
let b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignacion
let a = 'aa'; // redecalracion


//Global Scope
let fruit = 'Apple' //Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//Cuiddado al declarar variables en funciones
function countriers() {
    country = 'Colombia'; //Global
    console.log(country);
}

countriers();
console.log(country)
