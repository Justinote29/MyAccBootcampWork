const superfood = require("superfood");

// console.log(superfood.random());
// console.log(superfood.all);

// console.log(superfood.all.filter(Myfunct));

// function Myfunct(value) {
//   return value.length >= 10;
// }

// same as above but with an implied function
let result = superfood.all.filter((word) => word.length >= 20);

if (result.length > 0) {
  return console.log(result);
} else {
  return console.log("No results found");
}

//same with ternary operators
// console.log(result.length > 0 ? result : "No results found");
