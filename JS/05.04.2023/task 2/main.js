let num = Number(prompt('Enter number'));

function factorial(...params) {
    if (num) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }
        let multiply = 1;
        for (let j = 1; j <= arr.length; j++) {
            multiply = multiply * j;
        }
        alert(multiply);
    }
    else {
        alert('Invalid number');
    }
    return factorial;
}

factorial();