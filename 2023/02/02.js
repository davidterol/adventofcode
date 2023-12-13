var funciones = require("../../utils/functions.js");

// Insert input into a variable

const input = funciones
  .readText("INPUT.txt")
  .replace(/\r\n/g, "\n")
  .split("\n");

let gamesPossible = 0;
let idSums = 0;
let powerSum = 0;
input.forEach((element) => {
  //console.log('Element: ' + element + '----' + funciones.getGameNumber(element));
  /*funciones.isPossibleGame(
    funciones.getRedCubes(element),
    funciones.getGreenCubes(element),
    funciones.getBlueCubes(element)
  )
    ? console.log("Game " + funciones.getGameNumber(element) + " is possible\n") &
      gamesPossible++ & (powerSum += funciones.getPower(
        funciones.getRedCubes(element),
        funciones.getGreenCubes(element),
        funciones.getBlueCubes(element)
      )) &
      (idSums += funciones.getGameNumber(element))
    : console.log(
        "Game " + funciones.getGameNumber(element) + " is not possible \n"
      );*/
    powerSum += funciones.getPower(
      funciones.getRedCubes(element),
      funciones.getGreenCubes(element),
      funciones.getBlueCubes(element)
    );
});
/*console.log("Games possible: " + gamesPossible);
console.log("Sum of IDs: " + idSums);*/
console.log("Power sum: " + powerSum);
