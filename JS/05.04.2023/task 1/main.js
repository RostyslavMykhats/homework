let firstNumber = Number(prompt('Enter first number'));
let secondNumber = Number(prompt('Enter second number'));

function comparisonOfNumbers(...params) {
    if(firstNumber < secondNumber  && firstNumber && secondNumber) {
        alert(1)
    }

    else if (firstNumber > secondNumber && firstNumber && secondNumber) {
        alert(-1)
    }

    else if (firstNumber == secondNumber && firstNumber && secondNumber) {
        alert(0);
    }
    else {
        alert('Invalid number')
    }
    return comparisonOfNumbers;
}

comparisonOfNumbers();
