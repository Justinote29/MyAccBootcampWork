//This function takes a number and changes in into a string and then splits the individual digits into an array of strings.  Then it uses the map() method to create a new array of the square of each digit.  It then joins the array together to form string and uses ParseInt() to convert it into a number and returns it. 



function squareConcat(number) {
    let stringArray = number.toString().split("");
    let numberArray = stringArray.map(x => x * x);
    return parseInt(numberArray.join(""));
}
        
    
console.log((squareConcat(6189)));