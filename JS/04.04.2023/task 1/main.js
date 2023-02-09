let x = Number(prompt("Enter first number"));
let y = Number(prompt("Enter second number"));

function Array(...params) {
  let arr = [];
  for (i = x; i <= y; i++) {
    arr.push(i);
  }
  return arr;
}

function sum(...params) {
  let sumOfArray = 0;
  for (const iterator of Array()) {
    sumOfArray += iterator;
  }
  return sumOfArray;
}

alert(sum());
