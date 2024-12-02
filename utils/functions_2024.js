function notVoid(text) {
  return text != ""
}

function numEquals(origin, search) {
  const equals = search.filter((num) => num == origin).length
  return equals
}

function getLowest(number) {
  var lowest = 0
  number.forEach((element) => {
    if (lowest == 0) {
      lowest = element
    } else {
      if (element < lowest) {
        lowest = element
      }
    }
  })
  return lowest
}

function isSafe(levels) {
  var decrease = 0
  var increase = 0
  var unsafe = 0
  // console.log(levels.length)
  for (let index = 1; index < levels.length; index++) {
    console.log(
      levels[index],
      "-",
      levels[index - 1],
      "=",
      Math.abs(levels[index] - levels[index - 1])
    )
    if (
      Math.abs(levels[index] - levels[index - 1]) > 3 ||
      Math.abs(levels[index] - levels[index - 1]) == 0
    ) {
      // console.log("BAD DISTANCE")
      unsafe++
      return unsafe
    }
    if (Number(levels[index]) < Number(levels[index - 1])) {
      // console.log("DECREASE")
      decrease++
    }
    if (Number(levels[index]) > Number(levels[index - 1])) {
      // console.log("INCREASE")
      increase++
    }
    if (decrease > 0 && increase > 0) {
      // console.log("INCREASE AND DECREASING")
      unsafe++
      return unsafe
    }
  }
  return unsafe
}

function isSafe2(levels) {
  console.log(levels)
   return levels
}

function removeItem(array, itemToRemove) {
  const index = array.indexOf(itemToRemove);
  const before = array.slice(0,index);
  const after = array.slice(index+1);
  const result = before.concat(after);
  // if (index !== -1) {
  //     array.splice(index, 1);
  // }
  // console.log("Updated Array: ", array);
return result
}

module.exports = {
  notVoid,
  getLowest,
  numEquals,
  isSafe,
  isSafe2,
  removeItem
}
