
let fisrtNumber = Number(prompt('Enter first number'));
let secondNumber = Number(prompt('Enter second number'))

function divisor(fisrtNumber,secondNumber) {
    if (!secondNumber) {
        return fisrtNumber;
    }

    return divisor(secondNumber, fisrtNumber % secondNumber);
}
divisor();
alert(divisor(fisrtNumber,secondNumber));
