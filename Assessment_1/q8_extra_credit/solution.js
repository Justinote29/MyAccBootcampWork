
//this took a while and I'm sure there's a waaaay more elegant way of doing this, but this at least works.  I relied heavily on researching to get this and honestly, there is a bit about the tally function that I'm not entirely sure how it works.  Anyway, wanted to be honest about that.

//   I made a function to tally the occurrences of each number using the reduce method.It takes the number at each index and adds it to a tally object that has a key for each number that is in the array.It adds one to the tally for each time the number occurs in the array.Next, with the tally object, I make another function that uses Object.keys() to produce an array of the object keys then I used find() to find the key that matched the value of 1 to get the number that occurred only once.    


let array = [11, 11, 3, 11, 11, 11, 11, 3, 5];

let numObject = tallyNums(array);

function tallyNums(array) {
   return array.reduce((tally, number) => {
       tally[number] = (tally[number] || 0) + 1;
        return tally;
   }, {})
    
}

function singleNum(obj, value) {
    
    let keys = Object.keys(numObject);
   return keys.find(key=> obj[key]===1);
}

console.log(singleNum(numObject));



