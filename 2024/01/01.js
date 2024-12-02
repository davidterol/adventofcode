// Use readText() to read the input file and store it in a variable
// ---------------------------------------------------
var funciones = require("../../utils/functions.js")

var funciones2 = require("../../utils/functions_2024.js")

// Insert input into a variable
const input = funciones
  .readText("input.txt")
  .replace(/\r\n/g, "\n")
  .split("\n")

/// Get all distances
var distances = []
var distancesl = []
var distancesr = []
var difference = 0

for (let index = 0; index < input.length; index++) {
  const element = input[index]
  distancesl.push(element.match(/\d*/g).filter(funciones2.notVoid)[0])
  distancesr.push(element.match(/\d*/g).filter(funciones2.notVoid)[1])
}

// PART 01 //

// while (distancesl.length) {
// console.log(funciones2.getLowest(distancesl),'----',funciones2.getLowest(distancesr));
// distances.push([Math.abs(funciones2.getLowest(distancesl)-funciones2.getLowest(distancesr))]);

// distancesl.splice(distancesl.indexOf(funciones2.getLowest(distancesl)),1);
// distancesr.splice(distancesr.indexOf(funciones2.getLowest(distancesr)),1);
// }

// distances.forEach((element) => {
//     console.log(element[0])
//     difference += element[0];
// })

// console.log(difference);

// PART 02 //

var total = 0
distancesl.forEach((element) => {
  total += element * funciones2.numEquals(element, distancesr)
})

console.log(total)
