/*
function moneyBox(coints) {
    let saveCoints = 0;
    saveCoints += coints;
    console.log(`MoneyBox: ${saveCoints}`);
}

moneyBox(5);
moneyBox(5);
*/


function moneyBox() {
    let saveCoints = 0;
    function countCoins(coints) {
        saveCoints += coints;
        console.log(`MoneyBox: ${saveCoints}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


const moneyBoxAna = moneyBox();
moneyBoxAna(5);
moneyBoxAna(20);
moneyBoxAna(5);

