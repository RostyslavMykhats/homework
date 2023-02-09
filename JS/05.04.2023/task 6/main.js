let firstNumber = Number(prompt('Enter first number'));
let secondNumber = Number(prompt('Enter second number'));

function perfectNumberInRange(...params) {
    let arr = [];
    for (let i = firstNumber; i <= secondNumber; i++) {
        arr.push(i);
    }
    let perfectNumberArray = []
    for (let number of arr) {
        let temp = 0;
        for (let j = 1; j <= number / 2; j++) {
            if (number % j === 0) {
                temp += j;
            }
        }
        if (temp === number && temp !== 0) {
            perfectNumberArray.push(number);
        }
    }
    alert(perfectNumberArray);
}

perfectNumberInRange(); 
