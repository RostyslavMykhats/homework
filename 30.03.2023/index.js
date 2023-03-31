// task 1
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 100
};

function showCarInfo(car) {
    console.log(`Manufacturer: ${car.manufacturer}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Average speed: ${car.averageSpeed} km/h`);
}

function calculateTravelTime(distance) {
    let speed = car.averageSpeed;
    let restTime = Math.floor(distance / 4) * 1;
    let travelTime = distance / speed + restTime;
    return travelTime;
}

showCarInfo(car);
console.log(`Travel time for 500 km: ${calculateTravelTime(500)} hours`);


// task 2
let fraction = {
    numerator: 2,
    denominator: 3
};

function addFractions(f1, f2) {
    let commonDenominator = f1.denominator * f2.denominator;
    let commonNumerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    return {
        numerator: commonNumerator,
        denominator: commonDenominator
    };
}

function subtractFractions(f1, f2) {
    let commonDenominator = f1.denominator * f2.denominator;
    let commonNumerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    return {
        numerator: commonNumerator,
        denominator: commonDenominator
    };
}

function multiplyFractions(f1, f2) {
    let productNumerator = f1.numerator * f2.numerator;
    let productDenominator = f1.denominator * f2.denominator;
    return {
        numerator: productNumerator,
        denominator: productDenominator
    };
}

function divideFractions(f1, f2) {
    let quotientNumerator = f1.numerator * f2.denominator;
    let quotientDenominator = f1.denominator * f2.numerator;
    return {
        numerator: quotientNumerator,
        denominator: quotientDenominator
    };
}

function simplifyFraction(f) {
    let gcd = findGcd(f.numerator, f.denominator);
    return {
        numerator: f.numerator / gcd,
        denominator: f.denominator / gcd
    };
}

function findGcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return findGcd(b, a % b);
    }
}

let fraction2 = {
    numerator: 3,
    denominator: 4
};

let sum = addFractions(fraction, fraction2);
let difference = subtractFractions(fraction, fraction2);
let product = multiplyFractions(fraction, fraction2);
let quotient = divideFractions(fraction, fraction2);
let simplifiedFraction = simplifyFraction(fraction);

console.log(`Sum: ${sum.numerator}/${sum.denominator}`);
console.log(`Difference: ${difference.numerator}/${difference.denominator}`);
console.log(`Product: ${product.numerator}/${product.denominator}`);
console.log(`Quotient: ${quotient.numerator}/${quotient.denominator}`);
console.log(`Simplified fraction: ${simplifiedFraction.numerator}/${simplifiedFraction.denominator}`);

// task 3
// Об'єкт, що зберігає час
const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    // Функція виведення часу на екран
    displayTime: function () {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    // Функція зміни часу на передану кількість секунд
    addSeconds: function (seconds) {
        this.seconds += seconds;
        this.adjustTime();
    },

    // Функція зміни часу на передану кількість хвилин
    addMinutes: function (minutes) {
        this.minutes += minutes;
        this.adjustTime();
    },

    // Функція зміни часу на передану кількість годин
    addHours: function (hours) {
        this.hours += hours;
        this.adjustTime();
    },

    // Функція для коректування часу після зміни
    adjustTime: function () {
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds %= 60;
        }

        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes %= 60;
        }

        if (this.hours >= 24) {
            this.hours %= 24;
        }
    }
};

// Приклад використання
time.hours = 20;
time.minutes = 30;
time.seconds = 45;

time.displayTime(); // виведе "20:30:45"

time.addSeconds(30);
time.displayTime(); // виведе "20:31:15"

time.addMinutes(15);
time.displayTime(); // виведе "20:46:15"

time.addHours(5);
time.displayTime(); // виведе "01:46:15"
