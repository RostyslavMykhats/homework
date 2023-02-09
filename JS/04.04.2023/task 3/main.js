let number = Number(prompt('Enter number '));

function numberDivisors(...params) {
    if (!number) {
        alert('Invalid number');
    }
    else {
        let arr = [];
        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                arr.push(i);
            }
        }
        alert(arr);
    }
}
numberDivisors();

