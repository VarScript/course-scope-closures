//Variables que van a tener que ser solo de este bloque
function greeting() {
    let userName = 'Ana'; // Asignamos y declaramos, asi solo va a tener un alcance local 
    console.log(userName);

    if (userName === 'Ana') console.log(`Hello ${userName}!`);
}

greeting();
console.log(userName);
