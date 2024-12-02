// Use readText() to read the input file and store it in a variable
// ---------------------------------------------------
var funciones = require("../../utils/functions.js")

var funciones2 = require("../../utils/functions_2024.js")

// Insert input into a variable
const input = funciones
  .readText("input_example.txt")
  .replace(/\r\n/g, "\n")
  .split("\n")

var numbers = []

input.forEach((element) => {
  numbers.push(element.match(/\d*/g).filter(funciones2.notVoid))
})

// console.log(input)

// console.log(numbers)
var safes = 0
numbers.forEach((num) => {

})

// console.log(safes)
