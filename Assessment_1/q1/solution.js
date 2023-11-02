
//I'm using the reduce() method to execute a function to reduce the array to one value.  It will got through each item in the array and if it is greater than 0, add it to the total. 

function sumPositive(array) {
    return array.reduce((total, currVal) => {
        if (currVal > 0) {
            return total + currVal;
        }
            return total;
    }
        ,//Had to set the initial value of total to zero to make it work.  This also allow the function to return 0 if there is nothing to sum
        0)
};

//tests
console.log(sumPositive([5, 4, 2, -3]));
console.log(sumPositive([0, -1]));