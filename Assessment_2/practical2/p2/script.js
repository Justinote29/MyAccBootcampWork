// *** Please include your answer below ***

//this function takes an array as a parameter and then it sorts the array and makes a new variable called sortedArray with the .sort() array method that takes a function with 2 parameters that compares the items in an array.  If a - b is positive, b is returned first because it's bigger and the opposite is also true, so the numbers are ordered from least to greatest.  Then this new sortedArray is used to make a finalArray variable that is the second item in sortedArray (by referencing the number at index 1) and the next to last number in the array, which is the number at the length of the array -2.

const second = (array) => {
  let sortedArray = array.sort(function (a, b) {
    return a - b;
  });
  let finalArray = [sortedArray[1], sortedArray[sortedArray.length - 2]];
  console.log(finalArray);
};
