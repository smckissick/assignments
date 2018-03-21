// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let myName = "Sophia";
let yourName = "Chris";

function helloWorld() {
  renderOutput("Hello World");
}
function helloName(name) {
  renderOutput("Hello " + name);
}
function todaysHours(oneDaysHours) {
  renderOutput(oneDaysHours);
}

if (myName === "Sophia") {
  renderOutput("That's me!")
} else if (myName === "Chris") {
  renderOutput("That's Chris!")
} else {
  renderOutput("That's not me!")
}

helloName("Sophia");
helloName("Chris");
helloName("Renee");

//todaysHours("Tuesday: 9a - 5p");

hours.forEach(todaysHours);