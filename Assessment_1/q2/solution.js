//This function takes a number and if it is positive, multiplies it by -1 to make it negative.  If it is not greater than zero, it just returns the num without doing anything to it.


function negativeNum(num) {
 return   num > 0 ? num * -1 : num
}

console.log(negativeNum(10));
console.log(negativeNum(0));
console.log(negativeNum(-5));