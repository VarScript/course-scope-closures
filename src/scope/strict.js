//Nos permite ejecutar de forma estricta unas reglas particulares para que nuestro codigo cumpla con el mayor de los estandares

// var pi; / lo que interpreta javaScript
pi = 3.1416;
console.log(pi);

'use strict';
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict'
    pi = 3.1416;
    console.log(pi);
}

console.log(myFunction());