//I used the reduce method to go through the array and reduce it to a single value.  I checked to see if each item was equal to true, and if it was I added 1 to the total, which I initialized to be equal to zero.  If the item anything other than true, it will not add 1 to the total.  

function trueCount(array) {
    return array.reduce((total, currVal)=>{
        if (currVal === true) {
            return total+1;
        }
        return total;    
    }, 0)
};

let array = [true, false, true, true, null, undefined, true, true];

console.log(trueCount(array));