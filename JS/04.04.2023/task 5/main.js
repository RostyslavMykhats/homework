function allocateANumber(...params) {
    let arr = []
    for (let i = 1; i <= 10; i++) {
        let number = Number(prompt('Enter number'));
        arr.push(number);
    }
    let positive = [];
    let minus = [];
    let zero = [];
    let steamy = [];
    let odd = [];
    for (const iterator of arr) {
        if (iterator >= 1) {
            positive.push(iterator);
        }
        else if (iterator <= -1) {
            minus.push(iterator);
        }
        else if (iterator == 0) {
            zero.push(iterator);
        }
    }
    for (const iterator of arr) {
        if (iterator % 2 == 0) {
            steamy.push(iterator);
        }
        else if (iterator % 2 != 0) {
            odd.push(iterator);
        }
    }
    alert(`positive: ${positive.length},
minus : ${minus.length},
zero : ${zero.length}, 
steamy : ${steamy.length}, 
odd : ${odd.length}`);
}

allocateANumber();
