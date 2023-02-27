//Raising a number in degrees
const submit = document.getElementById('submit').addEventListener('click', () => {
    const num = parseFloat(document.querySelector('.number').value);
    const deg = parseInt(document.querySelector('.degree').value);
    if (isNaN(num) || isNaN(deg)) {
        alert('Please enter valid values for both fields');
        return;
    }
    function power(num, deg) {
        if (deg === 0) {
            return 1;
        }
        if (deg > 0) {
            return num * power(num, deg - 1);
        } else {
            return 1 / (num * power(num, -deg - 1));
        }
    }
    const numDone = power(num, deg);
    function renderElementsOnPage(numDone) {
        let html = '';
        html += `<div class="rend">
        <h1 class="complit-number">${numDone}</h1>
        </div>`
        const TARGET = document.querySelector('.result');
        TARGET.innerHTML = html;
    }
    renderElementsOnPage(numDone);
});

//The largest common divisor
const submitDivider = document.getElementById('submit-divider').addEventListener('click', () => {
    const numDivider = parseFloat(document.querySelector('.num-divider').value);
    const divider = parseInt(document.querySelector('.deg-divider').value);
    if (isNaN(numDivider) || isNaN(divider)) {
        alert('Please enter valid values for both fields');
        return;
    }
    function gcd(numDivider, divider) {
        if (divider === 0) {
            return numDivider;
        } else {
            return gcd(divider, numDivider % divider);
        }
    }
    const numDividerDone = gcd(numDivider, divider);
    function renderElementsOnPage(numDividerDone) {
        let html = '';
        html += `<div class="rend">
        <h1 class="complit-numDividerber">${numDividerDone}</h1>
        </div>`
        const TARGET = document.querySelector('.result-divider');
        TARGET.innerHTML = html;
    }
    renderElementsOnPage(numDividerDone);
});

//Maximum digit in number
const submitMaxDigit = document.getElementById('submit-digit').addEventListener('click', () => {
    const numDigit = parseFloat(document.querySelector('.max-digit').value);
    if (isNaN(numDigit)) {
        alert('Please enter valid values for both fields');
        return;
    }
    function findMaxDigit(numDigit) {
        if (numDigit < 10) {
            return numDigit;
        }
        const maxDigit = findMaxDigit(Math.floor(numDigit / 10));
        const lastDigit = numDigit % 10;
        return Math.max(maxDigit, lastDigit);
    }
    const numDigitDone = findMaxDigit(numDigit);
    function renderElementsOnPage(numDigitDone) {
        let html = '';
        html += `<div class="rend">
        <h1 class="complit-numDividerber">${numDigitDone}</h1>
        </div>`
        const TARGET = document.querySelector('.result-max-digit');
        TARGET.innerHTML = html;
    }
    renderElementsOnPage(numDigitDone);
});

// Simple number
const submitSimpleNum = document.getElementById('submit-simple').addEventListener('click', () => {
    const numSimple = parseFloat(document.querySelector('.simple-num').value);
    if (isNaN(numSimple)) {
        alert('Please enter valid values for both fields');
        return;
    }
    function isPrime(numSimple, divisor = 2) {
        if (numSimple <= 2) {
            return (numSimple === 2) ? true : false;
        }
        if (numSimple % divisor === 0) {
            return false;
        }
        if (divisor * divisor > numSimple) {
            return true;
        }
        return isPrime(numSimple, divisor + 1);
    }
    const numSimpleDone = isPrime(numSimple, divisor = 2);
    function renderElementsOnPage(numSimpleDone) {
        let html = '';
        html += `<div class="rend">
        <h1 class="complit-numDividerber">${numSimpleDone}</h1>
        </div>`
        const TARGET = document.querySelector('.result-simple-num');
        TARGET.innerHTML = html;
    }
    renderElementsOnPage(numSimpleDone);
});

// Multiply number

const submitMultiplyNum = document.getElementById('submit-multiply').addEventListener('click', () => {
    const numMultiply = parseFloat(document.querySelector('.multiply-num').value);
    if (isNaN(numMultiply)) {
        alert('Please enter valid values for both fields');
        return;
    }
    function getFactors(numMultiply, divisor = 2, factors = []) {
        if (numMultiply <= 1) {
            return factors;
        }
        if (numMultiply % divisor === 0) {
            factors.push(divisor);
            return getFactors(numMultiply / divisor, divisor, factors);
        }
        return getFactors(numMultiply, divisor + 1, factors);
    }
    const numMultiplyDone = getFactors(numMultiply, divisor = 2, factors = []);
    function renderElementsOnPage(numMultiplyDone) {
        let html = '';
        html += `<div class="rend">
        <h1 class="complit-numDividerber">${factors.join('*')}</h1>
        </div>`
        const TARGET = document.querySelector('.result-multiply-num');
        TARGET.innerHTML = html;
    }
    renderElementsOnPage(numMultiplyDone);
});

// Fibonacci number

const submitFibonacci = document.getElementById('submit-fibonacci').addEventListener('click', () => {
    const numFibonacci = parseFloat(document.querySelector('.fibonacci-num').value);
    if (isNaN(numFibonacci)) {
        alert('Please enter valid values for both fields');
        return;
    }
    function fibonacci(numFibonacci) {
        if (numFibonacci === 1 || numFibonacci === 2) {
            return 1;
        }
        return fibonacci(numFibonacci - 1) + fibonacci(numFibonacci - 2);
    }
    const numFibonacciDone = fibonacci(numFibonacci);
    function renderElementsOnPage(numFibonacciDone) {
        let html = '';
        html += `<div class="rend">
        <h1 class="complit-numDividerber">${numFibonacciDone}</h1>
        </div>`
        const TARGET = document.querySelector('.result-fibonacci-num');
        TARGET.innerHTML = html;
    }
    renderElementsOnPage(numFibonacciDone);
});



