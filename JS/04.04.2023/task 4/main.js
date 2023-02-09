let number = Number(prompt('Enter number'))

function LengthOfNum(...params) {
    let count = 0;
    if (number !== '') {
        alert('It is not number');
    }
    else {
        do { number /= 10; count++ }
        while (number >= 1);
        alert(count);
    }
}

LengthOfNum();
