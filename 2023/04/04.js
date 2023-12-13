var funciones = require("../../utils/functions.js");

// Insert input into a variable

const input = funciones
  .readText("INPUT.txt")
  .replace(/\r\n/g, "\n")
  .split("\n");


// console.log(input);
let total = {}
// Get the number of games
input.forEach((line) => {
    let gameNumber = Number(funciones.getCardNumber(line));
    let scratNumbers = funciones.getScratNumber(line);
    let winningNumbers = funciones.getWinningNumber(line);
    let value = 0
    
    // console.log(gameNumber, ...scratNumbers, ...winningNumbers);
    // console.log("\n")
    ///PT1
/*    scratNumbers.forEach((element) => {
        if (winningNumbers.includes(element)) {
            value === 0 ? value++ : value=value*2
        }
        // console.log(element,winningNumbers.includes(element),value)
    })
total += value

*///PT1END//


////PT2
    // console.log("Game: " + gameNumber)
    scratNumbers.forEach((element) => {
        if (winningNumbers.includes(element)) {
            value++;
            }
        }
    )
    /// VALUE == number of winning numbers
    console.log("Game: " + gameNumber)
    console.log("Winning value: " + value)

    /// TOTAL == number of winning numbers + previous winning numbers
    total[gameNumber] === undefined ? (total[gameNumber] = 1) : (total[gameNumber] = total[gameNumber]++) 

    console.log("Total: " + total[gameNumber])

    let temp = value + Number(gameNumber);

    if ( temp > input.length ){
        temp = input.length;
    }
    
    for (let index = temp ; index > gameNumber; index--) {
        total[index] === undefined ? total[index] = (1 + total[gameNumber]) : total[index] = (total[gameNumber] + total[index]);
        }
        console.log("\n")
    }
) 


let totales = 0;  

for (const key in total) {
    if (Object.hasOwnProperty.call(total, key)) {
        const element = total[key];
        totales += element
    }
}

console.log(total)
console.log(totales)

///PT2END

