// Create a public function to read text files
// from the local file system
// ---------------------------------------------------

const { match } = require("assert");
const fs = require("fs");

function readText(path) {
  return fs.readFileSync(path, "utf8");
}

const regexp = RegExp(/[0-9]/g);

function getNumbersInEnglish(text) {
  //console.log(text);
  const numbersInEnglish = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  // Find into text the numbers in english and return them in an array

  let numbers = {};

  // Find into text numbersInEnglish and store them in numbers
  for (let key in numbersInEnglish) {
    let regexp = new RegExp(key, "g");
    let ocurrencia = "";
    while ((ocurrencia = regexp.exec(text)) !== null) {
      numbers[ocurrencia.index] = numbersInEnglish[key];
    }
  }

  let numbersArray = {};
  // insert into numbersArray the text.match(/\d/g) in text and index of each match
  //console.log(text.match(/[0-9]/g))

  let ocurrencia = "";

  while ((ocurrencia = regexp.exec(text)) !== null) {
    numbers[ocurrencia.index] = Number(ocurrencia[0]);
  }

  //   console.log(numbers);

  // Combine numbers and numbersArray into numbersArray
  for (let key in numbers) {
    numbersArray[key] = numbers[key];
  }

  numbersArray = Object.values(numbersArray);

  //console.log(numbersArray);

  let val = [];

  val.push(numbersArray[0]);
  val.push(numbersArray[numbersArray.length - 1]);

  return parseInt(val.join(""));
}

function getGameNumber(game) {
  let gameNumber = game
    .match(/\d+[:]/g)
    .toString()
    .match(/\d+/g);
  return Number(gameNumber);
}

function getRedCubes(game) {
  let redCubes = game
    .match(/\d+.(red)/g)
    .toString()
    .match(/\d+/g);
  let redNumber = 0;
  redCubes.forEach((element) => {
    redNumber < Number(element) ? (redNumber = Number(element)) : redNumber;
  });
  //console.log("Red: " + redNumber);
  return Number(redNumber);
}

function getGreenCubes(game) {
  let greenCubes = game
    .match(/\d+.(green)/g)
    .toString()
    .match(/\d+/g);
  let greenNumber = 0;
  greenCubes.forEach((element) => {
    greenNumber < Number(element)
      ? (greenNumber = Number(element))
      : greenNumber;
  });
  //console.log("Green: " + greenNumber);
  return Number(greenNumber);
}

function getBlueCubes(game) {
  let blueCubes = game
    .match(/\d+.(blue)/g)
    .toString()
    .match(/\d+/g);
  let blueNumber = 0;
  blueCubes.forEach((element) => {
    blueNumber < Number(element) ? (blueNumber = Number(element)) : blueNumber;
  });
  //console.log("Blue: " + blueNumber);
  return Number(blueNumber);
}

function isPossibleGame(red, green, blue) {
  const redCubes = 12;
  const greenCubes = 13;
  const blueCubes = 14;
  if (red <= redCubes && green <= greenCubes && blue <= blueCubes) {
    return true;
  }
}

function getPower(red, green, blue) {
  let power = 0;
  power = red * green * blue;
  return power;
}

function dotToCero(line) {
  const regexp = /\./g;
  return line.replace(regexp, "0");
}

function getSpecialChar(line, row) {
let line2 = dotToCero(line);
const charPos = [];
const regexp = /[\d]/g;
  //console.log(line + "\n")
  for (let index = 1; index < line2.length; index++) {
    !line2[index].match(regexp)
      ? charPos.push({ x: row, y: index, char: line2[index] }) 
      : "";
  }
  //console.log(...charPos)
  return charPos;
}

function getNumbers(line, row) {
  const regexp = /[0-9]+/g;
  let numbers = [];
  let match = [...line.matchAll(regexp)]
  //Fill numbers array with line.match(regexp) in line and their index
  match ? match.forEach((element) => {
    let indexes = [];
    for (let index = 0; index < element[0].length; index++) {
      indexes.push(element.index + index);
    }
    numbers.push({ number: Number(element), index: indexes, row: row });
  }) : null ;
//console.log(...numbers)
  return numbers;
}

function getDiagonales (element) {
    let diagonalx1 = element.x - 1
    let diagonalx2 = element.x + 1
    let diagonaly1 = element.y - 1
    let diagonaly2 = element.y + 1

    let diagonal1 = [diagonalx1,diagonaly1]
    let diagonal2 = [diagonalx1,diagonaly2]
    let diagonal3 = [diagonalx2,diagonaly1]
    let diagonal4 = [diagonalx2,diagonaly2]
    let arriba = [diagonalx1,element.y]
    let abajo = [diagonalx2,element.y]
    let izquierda = [element.x,diagonaly1]
    let derecha = [element.x,diagonaly2]

    return [diagonal1,diagonal2,diagonal3,diagonal4,arriba,abajo,izquierda,derecha]
}

function getDiagonalesnum (y, x) {
 let diagonal1 = [y-1,x-1]
  let diagonal2 = [y-1,x+1]
  let diagonal3 = [y+1,x-1]
  let diagonal4 = [y+1,x+1]
  let arriba = [y-1,x]
  let abajo = [y+1,x]
  let izquierda = [y,x-1]
  let derecha = [y,x+1]

  return [diagonal1,diagonal2,diagonal3,diagonal4,arriba,abajo,izquierda,derecha]
}

function getCardNumber(line){
  let regexp = /\d+(?=\:)/g
  let match = [...line.match(regexp)]
  return match
}

function getScratNumber(line){
  let regexp = /(?<=:.)(?<!\d)(.*)(?=.\|)/g
  let match = line.match(regexp).toString().replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').split(" ")
  return match
}

function getWinningNumber(line){
  let regexp = /(?<=\|.).*/g
  let match = line.match(regexp).toString().replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').split(" ")
  return match
}

function getSeeds(line){
  let regexp = /(?<=seeds:.)[0-9].*/g
  let match = regexp.exec(line)
  let result = []
  if (match != null){
    match = match.toString().replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').split(" ")
    match.forEach(element => {
      result.push(Number(element))
    });
    return result
  }
}

function getDay5Values(line){
  let regexp = /(?<=map: )[0-9].*/g
  let result = []
  let test = line.replace(/\n/, " ").match(/[0-9].*/g).forEach(element => {
    result.push(element.split(" ").map(Number))
  }
    )
    return result
}

function getRanges(num, map){
  // console.log("num")
  // console.log(num)
  // console.log(map)
  let range = 0;
  map.forEach(element => {
    // console.log(element)
    let initRange = element[0];
    let initSeed = element[1];
    let rangeLenght = element[2];
    if (num == initSeed) { range = initRange; }
    if (num > initSeed && num < initSeed + rangeLenght) { range = initRange + num - initSeed; }
  })
  if (range == 0) { range = num;}
  return range
}

function getSeedsNumber(start, end, seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation){
  let length = (start + end)-1;
  let lowest = 0;
  for (let index = start; index <= length; index++) {
  // console.log("Seed: " + index);
  let soil = getRanges(index, seedToSoil);
  // console.log("Soil: " + soil)
  let fertilizer = getRanges(soil, soilToFertilizer);
  // console.log("Fertilizer: " + fertilizer)
  let water = getRanges(fertilizer, fertilizerToWater);
  // console.log("Water: " + water)
  let light = getRanges(water, waterToLight);
  // console.log("Light: " + light)
  let temperature = getRanges(light, lightToTemperature);
  // console.log("Temperature: " + temperature)
  let humidity = getRanges(temperature, temperatureToHumidity);
  // console.log("Humidity: " + humidity)
  let location = getRanges(humidity, humidityToLocation);
  // console.log("Location: " + location)
  
  if (lowest == 0) {
    lowest = location;
  } else {
    if (location < lowest) {
      lowest = location;
    }
  }
  // console.log("lowest: " + lowest)  
  // console.log("\n")
  }
  return lowest
}


module.exports = {
  readText,
  getNumbersInEnglish,
  getGameNumber,
  getRedCubes,
  getGreenCubes,
  getBlueCubes,
  isPossibleGame,
  getPower,
  getSpecialChar,
  getNumbers,
  getDiagonales,
  getDiagonalesnum,
  getCardNumber,
  getScratNumber,
  getWinningNumber,
  getSeeds,
  getDay5Values,
  getRanges,
  getSeedsNumber
};
