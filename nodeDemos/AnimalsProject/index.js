const animals = require("animals");

const petLog = require("log.pets");

// console.log(animals());

// console.log(petLog.lion());

// console.log(petLog.zoo(animals(), animals(), animals()));

//prints total number of animals available
// console.log(animals.words.length);

//prints an array of animals starting with "g" with the filter() method, which takes a function that filters it for matches and then there's another function which checks to see if any matches were found, if not it prints "No Matches Found", and if so it prints the matches in an array.
const gAnimals = animals.words.filter(myFunc);

function myFunc(value) {
  return value.startsWith("g");
}

function gAnimalsFunc() {
  if (gAnimals.length === 0) {
    return "No Matches Found";
  } else {
    return gAnimals;
  }
}

console.log(gAnimalsFunc());

console.log(gAnimals.length);
