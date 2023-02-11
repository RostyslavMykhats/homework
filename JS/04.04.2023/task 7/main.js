let num = Number(prompt("Enter number"));
let count = Number(prompt("How many digits to move the number?"));
if (num <= count || !num || !count || count <= 0) {
  alert("incorrect data");
} else {
  function numChange(...params) {
    let arr = Array.from(String(num), Number);
    for (let i = 0; i <= count - 1; i++) {
      let shifted = arr.shift();
      arr.push(shifted);
    }
    let changedNum = arr.join("");
    alert(changedNum);
  }
  numChange();
}
