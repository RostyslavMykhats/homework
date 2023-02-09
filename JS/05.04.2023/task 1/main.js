let x = Number(prompt('Enter first number'));
let y = Number(prompt('Enter second number'));

function comparisonOfNumbers(...params) {
    if(x < y  && x && y) {
        alert(1)
    }

    else if (x > y && x && y) {
        alert(-1)
    }

    else if (x == y && x && y) {
        alert(0);
    }
    else {
        alert('Invalid number')
    }
    return comparisonOfNumbers;
}

comparisonOfNumbers();
