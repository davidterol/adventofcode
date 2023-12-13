// Use readText() to read the input file and store it in a variable
// ---------------------------------------------------
var funciones = require('../../utils/functions.js');

// Insert input into a variable

const input = funciones.readText('../2023/01/INPUT.txt').replace(/\r\n/g, '\n').split('\n');

// Read each line of the input and get the numbers with regex on each line and store them in an array
//console.log('Element: ' + input[3] + ' ---- ' + funciones.getNumbersInEnglish(input[3]));
var input1 = [];


var elf = 0;
for (let index = 0; index < input.length; index++) {
    const element = input[index];
    var num = funciones.getNumbersInEnglish(element)
    elf += num;
   //console.log('Element: ' + element + '----' + num);
}
// input.forEach(element => {
//     console.log('Element: ' + element + '----' + funciones.getNumbersInEnglish(element));
//     elf += funciones.getNumbersInEnglish(element);
// });

console.log(elf);

