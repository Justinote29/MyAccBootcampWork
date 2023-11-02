// *** Please include your answer below ***
//this function takes a string as a parameter, it creates an array (wordArray) of the individual words in the string with .split() and it uses a chained method to sort the array in descending order and console.logs the item at index 0 in the array, which is the longest word.

const longWord = (string) => {
  const wordArray = string.split(" ").sort((a, b) => {
    return b.length - a.length;
  });
  console.log(wordArray[0]);
};
