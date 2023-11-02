// *** Please include your answer below ***

//This function sets numberList to an empty string and then with a for loop goes from -10 to 10 adding each number to numberList if the number is not divisible by 3.   I then console.log numberList outside of the for loop so it only prints once with all the numbers on the same line.  I used a template literal instead of just adding i to each previous i in the loop to be able to leave a space after each number.

const Loop = () => {
  let numberList = "";
  for (let i = -10; i < 11; i++) {
    if (i % 3 != 0) {
      numberList += `${i} `;
    }
  }
  console.log(numberList);
};
