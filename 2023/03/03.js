var funciones = require("../../utils/functions.js");

// Insert input into a variable

const input = funciones
  .readText("INPUT.txt")
  .replace(/\r\n/g, "\n")
  .split("\n");

let obj = [];
let obj2 = [];
//console.log(input)

input.forEach((element, index) => {
  obj.push(...funciones.getSpecialChar(element, index));
  obj2.push(...funciones.getNumbers(element, index));
});
//console.log(obj);
//console.log(obj2);
let numbers = [];
let total = 0;

/////PT 1
/*
  obj2.forEach((num) => {
  let diagonales = [];
  let flag = 0;
  //console.log(num);
  num.index.forEach(
    (index) => 
   diagonales.push(...funciones.getDiagonalesnum(index, num.row))
  )
  diagonales.forEach((diag) => {
    obj.filter((c) => (c.x === diag[1]) & (c.y === diag[0])).forEach((char) => {
      flag == 0 ? numbers.push(num.number) & flag++ : "";
  });
});
});

//console.log(obj.filter((x) => x.x === 1));


let total = 0;
//console.log(numbers.join(" "));
  numbers.forEach((element) => {
    total += element;
  });
  
  console.log(total);
*/


/////PT2


obj.filter((c) => c.char === "*").forEach((element) => {
  let diagonales = funciones.getDiagonales(element);
  // console.log(element)
  let numeros = [];
  let parcial = 1;
      diagonales.forEach((diag) => {
        //console.log(obj2.filter((n) => n.index.includes(diag[1]) & n.row == diag[0]))
      obj2.filter((n) => n.index.includes(diag[1]) & n.row == diag[0]).forEach((num) => {
        numeros.find((x) => x.number == num.number & x.row == num.row & x.index == num.index) ? "" : numeros.push(num);
       });
  }) 
  numeros.length == 2 ?
  numeros.forEach((num) => {
    // console.log(num.number)
    parcial *= num.number
    // console.log(parcial + "\n")
  }) &
  (total += parcial) : ""
});

numbers.forEach((element) => {
  total += element;
})
console.log(total);
