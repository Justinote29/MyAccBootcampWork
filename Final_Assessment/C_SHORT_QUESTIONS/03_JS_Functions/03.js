// Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

// See example below ...

// ```
//     This is a string
//     There was string
//       ^^^^^^^          <-- 7 differences
// ```

// In the above example, the function should return the dynamic string "There are 7 differences".

// Please do not look for solved problems on the web. They are too complicated and you are likely to get into rabbit holes. Think about a string as a collection (array) of characters. How would you iterate over them and compare?  What edge conditions should you check for?

//Here, I split the strings into arrays.  I then compared their length in the case that the strings are the same length to make sure I was including cases where one string is longer than the other.  Then I did a for loop to compare the value of each index of the two arrays and increased the difference by one if they weren't the same.

const checkStrings = (str1, str2) => {
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  let length;
  if (str1.length > str2.length) {
    length = str1.length;
  } else if (str2.length > str1.length) {
    length = str2.length;
  } else {
    length = str1.length;
  }

  let differences = 0;
  for (let i = 0; i < length; i++) {
    if (str1Arr[i] !== str2Arr[i]) {
      differences += 1;
    }
  }
  differences = differences;
  return `There are ${differences} differences`;
};

console.log(checkStrings("This is a string", "There was string"));
