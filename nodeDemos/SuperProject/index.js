const marvel = require("marvel-characters");

//  a. Get a random character to show in the terminal.

// console.log(marvel());

//  Using various array methods:

//  b. Display the number of characters in the database

// console.log(marvel.characters.length);

//  c. Display only characters whose names start with "Man" in your terminal, or an error message if does not exist.

// const manCharacters = marvel.characters.filter(manFunction);

// function manFunction(value) {
//   return value.startsWith("Man");
// }
// console.log(manCharacters);

//  d. Display "Iron Man" in your terminal, or an error message if does not exist

// const ironMan = marvel.characters.filter(manFunction);

// function manFunction(value) {
//   return value.includes("Iron Man");
// }
// console.log(ironMan);

function findIronMan() {
  const ironMan = marvel.characters.find((character) =>
    character.includes("Iron Man")
  );

  if (ironMan) {
    return "Iron Man";
  } else {
    return "No Matches Found";
  }
}

console.log(findIronMan());

//  e. Display "Batman" in your terminal, or an error message if does not exist

// function findBatMan() {
//   const batMan = marvel.characters.find((character) =>
//     character.includes("Batman")
//   );

//   if (batMan) {
//     return character;
//   } else {
//     return "No Matches Found";
//   }
// }

// console.log(findBatMan());
