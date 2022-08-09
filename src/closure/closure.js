// los closures dan acceso al ambito lexico

function greeting() {
    let userName = 'VarScript';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

