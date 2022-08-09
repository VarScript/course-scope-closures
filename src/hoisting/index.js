/*
// var nameOfDog; / Eso es lo que hace javaScript
console.log(nameOfDog);
var nameOfDog = 'Elmo'; // La asignacion se hace despues del llamado
console.log(nameOfDog);
*/


// var nameOfDog; / undefined

nameOfDog();
// -> The best dog is undefined

function nameOfDog() {
    console.log(`The best dog is ${elmo}`);
}

var elmo = 'Elmito'; // Hoisting



nameOfDog();
// -> Error

function nameOfDog() {
    console.log(`The best dog is ${elmo}`);
}

//El hosting solo aplica a variables declaradas con var, si intentamos hacer un ejemplo similar con let o const tendremos errores: