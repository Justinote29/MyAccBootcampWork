const yesNo = require("yes-no-words");

// console.log(yesNo.yes);

//make and empty array
let wordArray = [];

//run yesRandom method 5 times to generate random yes words and push them into the empty array we created
for (let i = 0; i < 5; i++) {
  wordArray.push(yesNo.yesRandom());
}

//console.log the array to see it
console.log(wordArray);
