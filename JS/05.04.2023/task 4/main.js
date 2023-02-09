let width = Number(prompt('enter width'));
let height = Number(prompt('enter height'));

function area(...params) {
    let sum = 0;
    if (width && height) {
        sum = width * height;
        alert(`area = ${sum}`);
    }

    else if (width|| height) {
        sum = width * width || height * height;
        alert(`area = ${sum}`);
    }

    else {
        alert('Invalid params');
    }
}

area();

