let firstNumber = Number(prompt("Enter first number"));
let op = prompt("Select a sign - + / *");
let secondNumber = Number(prompt("Enter second number"));

switch (op) {
  case "+":
    alert(firstNumber + secondNumber);
    break;
  case "-":
    alert(firstNumber - secondNumber);
    break;
  case "/":
    alert(firstNumber / secondNumber);
    break;
  case "*":
    alert(firstNumber * secondNumber);
  default:
    break;
}

function calc(...params) {
  let select = prompt("Do you want to solve another example? Y/N");
  if (select == "Y") {
    while (select) {
      let firstNumber = Number(prompt("Enter first number"));
      let op = prompt("Select a sign - + / *");
      let secondNumber = Number(prompt("Enter second number"));

      switch (op) {
        case "+":
          alert(firstNumber + secondNumber);
          break;
        case "-":
          alert(firstNumber - secondNumber);
          break;
        case "/":
          alert(firstNumber / secondNumber);
          break;
        case "*":
          alert(firstNumber * secondNumber);
        default:
          break;
      }
      let select = prompt("Do you want to solve another example? Y/N");
      if (select == "N" || !select) {
        alert("Goodbay");
        break
      }
    }
  }
  else if (select == "N" || !select) {
    alert("Goodbay");
  }
}

calc();
