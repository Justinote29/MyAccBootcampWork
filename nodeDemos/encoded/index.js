//imports fs and crypto modules

const fs = require("fs");
const crypto = require("crypto");

//defines the path and contents of the new file
// const filePath = "./encoded.txt";
// const fileContents = "This is some sample text that will be encrypted";

//the file path of the javascript file to read
const inputFile = "./text.txt";

//Define the path and contents of the new file
const outputFile = "./encoded.txt";

let text = ""; //global context to allow data from file to be saved

//use fs.readFile() to read the file

fs.readFile(inputFile, "utf8", (error, data) => {
  if (error) console.log("Oops! Something went wrong while reading the file.");
  else {
    console.log("The file contents are:", data);
    text = data; //assigns text from file to global text variable
  }
});
//defines a key and initialization vector for the encryption

const key = "doggyHorsedoggyHorsedoggyHorse12";
const iv = crypto.randomBytes(16);

//creates a new cipher using 'crypto.createCipheriv()'

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

//encrypts the file contents using the cipher

// let encryptedContents = cipher.update(fileContents, "utf8", "hex");
let encryptedContents = cipher.update(text, "utf8", "hex");

encryptedContents += cipher.final("hex");

//Write the encrypted contents to a new file using 'fs'

// fs.writeFile(filePath, encryptedContents, function (error) {
//   if (error) {
//     console.log("Oops! Something went wrong while saving the file.");
//   } else {
//     console.log("Great! The file has been saved!");
//   }
// });

fs.writeFile(outputFile, encryptedContents, function (error) {
  if (error) {
    console.log("Oops! Something went wrong while saving the file.");
  } else {
    console.log("Great! The file has been saved!");
  }
});

// const func3 = () => {
//   console.log("I am third");
// };

// const func2 = () => {
//   func3();
//   console.log("I am second");
// };

// const func1 = () => {
//   func2();
//   console.log("I am first");
// };

// setTimeout(func1, 1000);
// console.log("I am fourth");
