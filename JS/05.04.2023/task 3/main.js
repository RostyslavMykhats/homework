let x = Number(prompt('Enter first number'));
let y = Number(prompt('Enter second number'));
let z = Number(prompt('Enter second number'));

function numberToString(...params) {
    if (x && y && z) {
        alert(`${x}${y}${z}`);
    }
    else {
        alert('Invalid number');
    }
    return numberToString;
}
numberToString();