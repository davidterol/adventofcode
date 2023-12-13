var funciones = require("../../utils/functions.js");

// Insert input into a variable

const input = funciones
  .readText("INPUT.txt")
  .replace(/\r\n/g, "\n")
  .split("\n\n");

// VARIABLES
const seedNumbers = funciones.getSeeds(input[0]);
const seedToSoil = funciones.getDay5Values(input[1]);
const soilToFertilizer = funciones.getDay5Values(input[2]);
const fertilizerToWater = funciones.getDay5Values(input[3]);
const waterToLight = funciones.getDay5Values(input[4]);
const lightToTemperature = funciones.getDay5Values(input[5]);
const temperatureToHumidity = funciones.getDay5Values(input[6]);
const humidityToLocation = funciones.getDay5Values(input[7]);

let lowestLocation = Infinity;
let seedTotal = [];
let startSeed = 0;
let endSeed = 0;

seedNumbers.forEach((seed, index) => {
  let location = 0;
  // console.log("Seed: " + seed);
  // console.log("Index: " + index);
  if (index % 2 == 0) {
    startSeed = seed;
  } else {
    endSeed = seed;
  }
  
    if(startSeed > 0 && endSeed > 0){
       location = funciones.getSeedsNumber(Number(startSeed), Number(endSeed), seedToSoil, soilToFertilizer, fertilizerToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation);
       startSeed = 0;
      endSeed = 0;
    }
    if (lowestLocation == 0) {
      lowestLocation = location;
    } else {
      if (location < lowestLocation && location > 0) {
        lowestLocation = location;
      }
    }
});
console.log(lowestLocation);
// Get the seed with the lowest location
/*
seedNumbers.forEach((seed) => {
  // console.log("Seed: " + seed);
  let soil = funciones.getRanges(seed, seedToSoil);
  let fertilizer = funciones.getRanges(soil, soilToFertilizer);
  let water = funciones.getRanges(fertilizer, fertilizerToWater);
  let light = funciones.getRanges(water, waterToLight);
  let temperature = funciones.getRanges(light, lightToTemperature);
  let humidity = funciones.getRanges(temperature, temperatureToHumidity);
  let location = funciones.getRanges(humidity, humidityToLocation);
  //
  if (lowestLocation == 0) {
    lowestLocation = location;
  } else {
    if (location < lowestLocation) {
      lowestLocation = location;
    }
  }
  // console.log("Final: " + location);
  // console.log("\n");
});
console.log("Lowest location: " + lowestLocation);
*/