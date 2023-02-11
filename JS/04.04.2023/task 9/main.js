function multiplication(...params) {
  let num = [];
  for (let index = 1; index <= 10; index++) {
    num.push(index);
  }

  for (let j = 2; j <= 9; j++) {
    let multiplier = [];
    for (let iterator of num) {
      iterator *= j;
      multiplier.push(iterator);
    }
    alert(multiplier);
  }
}
multiplication();
