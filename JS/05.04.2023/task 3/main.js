let firstNumber = Number(prompt('Enter first number'));
let secondNumber = Number(prompt('Enter second number'));
let thirdNumber = Number(prompt('Enter third number'));

function numberToString(...params) {
    if (firstNumber && secondNumber && thirdNumber) {
        alert(`${firstNumber}${secondNumber}${thirdNumber}`);
    }
    else {
        alert('Invalid number');
    }
    return numberToString;
}
numberToString();