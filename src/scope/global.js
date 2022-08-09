// variables

var a; //declarar
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignacion
var a = 'aa'; // redecalracion


//Global Scope
var fruit = 'Apple' //Global

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
