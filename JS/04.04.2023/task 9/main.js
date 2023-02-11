function utu(...params) {
  let num = [];
  for (let index = 1; index <= 10; index++) {
    num.push(index);
  }

  for (let j = 2; j <= 9; j++) {
    let hit = [];
    for (let iterator of num) {
      iterator *= j;
      hit.push(iterator);
    }
    alert(hit);
  }
}
utu();
