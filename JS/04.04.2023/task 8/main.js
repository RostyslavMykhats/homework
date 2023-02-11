const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let currDay = 0;

while (confirm(`${days[currDay]}. Want to see the next day?`)) {
  currDay = (currDay + 1) % days.length;
}

