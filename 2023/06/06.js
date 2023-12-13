var funciones = require("../../utils/functions.js");
const input = funciones
  .readText("INPUT.txt")
  .replace(/\r\n/g, "\n")
  .split("\n");

// VARIABLES
const times = Number(input[0].match(/\d+/g).toString().replace(/\,+/g,''));
const distances = Number(input[1].match(/\d+/g).toString().replace(/\,+/g,''));
console.log(times);
console.log(distances);
let records = {};
/*
times.forEach((time, i) => {
    // console.log("time");
    // console.log(time);
    // console.log("distances");
    // console.log(distances[i]);
  let record = false;
  records[i] = 0;

  for (let index = 1; index < distances[i]; index++) {
    let movement = (time-index);
    if ((movement*index) > distances[i]) {
        // console.log("movement");
        // console.log(movement*index);
        record = true;
    }
    if (record == true) {
      records[i]++;
      record = false;
    }
  }
//   console.log(records);
});
// console.log(records);
let final = records[0]*records[1]*records[2]*records[3];

console.log(final);*/

let record = 0;

  for (let index = 1; index < times; index++) {
    let movement = (times-index);
    if ((movement*index) > distances) {
      record++;
    }
}
console.log(record);