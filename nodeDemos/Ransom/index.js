var prompt = require("prompt-sync")();

const unicorn = require("unicorn").install();

// console.log("UNICORN".unicorn());

var note = prompt("Enter message here:");

// console.log(note);
let noteArray = note.split("");

//.map returns a new array
let noteArray2 = noteArray.map((element) => {
  let num = Math.random();
  if (num < 0.5) {
    return element.toLocaleLowerCase();
  } else if (num >= 0.5) {
    return element.toLocaleUpperCase();
  }
});

//looks for spaces(asci code 32 and gives them normal styling)
let finalNote = noteArray2.map((el) => {
  return el.charCodeAt(el) === 32 ? el.normal() : el.unicorn();
});

console.log(finalNote.join(""));
