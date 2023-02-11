let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));

function array(...params) {
  let arr = [];
  for (i = firstNumber; i <= secondNumber; i++) {
    arr.push(i);
  }
  return arr;
}

function sum(...params) {
  let sumOfarray = 0;
  for (const iterator of array()) {
    sumOfarray += iterator;
  }
  return sumOfarray;
}

alert(sum());
