// let readlineSync = require("readline-sync");

//prints the three questions to the console and gets the user responses and returns them in a statement.

// var userName = readlineSync.question("What is your name?");

// var userFood = readlineSync.question("What is your favorite food?");

// var userDrink = readlineSync.question("What is your favorite drink?");

// console.log(
//   `Hi ` +
//     userName +
//     `, your favorite food is ` +
//     userFood +
//     ` and your favorite drink is ` +
//     userDrink
// );

let question1 = require("readline-sync"),
  spicyLevels = [
    "spicy",
    "very spice",
    "so spicy, you won't be able to feel your face",
  ],
  index = question1.keyInSelect(
    spicyLevels,
    "How spicy would you like your tacos?"
  );

let question2 = require("readline-sync"),
  yesNo = ["Yes", "No"],
  index2 = question2.keyInSelect(
    yesNo,
    `Ok, so you want your tacos to be ` +
      spicyLevels[index] +
      `. Are you sure about this?`
  );

if (yesNo[index2] === "Yes") {
  console.log("Ok, we will have your order right out.");
} else if (yesNo[index2] === "No") {
  console.log("Ok, we will have your order right out.");
}
