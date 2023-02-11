alert("Think of a number from 1 to 100");

let arr = [];
for (let index = 1; index <= 100; index++) {
  arr.push(index);
}
while (true) {
  let ask = prompt(`This number is less than "<" : [${arr[Math.floor(arr.length / 2) - 1]}], greater than ">" : [${arr[Math.floor(arr.length / 2) - 1]}], this number is "=" : [${arr[Math.floor(arr.length / 2) - 1]}] ?`
  );
  if (!ask) break;
  
  else if (ask == "=") {
    alert(`Number = ${arr[Math.floor(arr.length / 2) - 1]}`);
    break;
  } 
  else if (ask == ">") {
    arr = arr.slice(Math.floor(arr.length / 2));
  } 
  else if (ask == "<") {
    arr = arr.slice(0, Math.floor(arr.length / 2));
  }
}
