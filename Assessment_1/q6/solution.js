//This function takes a string and converts it to lowercase so we don't have to search for both upper and lowercase vowels, and then splits the individual letters into substrings in an array.  Then it uses the reduce method to count the strings that are vowels and adds 1 to the total for each vowel that is found.


function vowels(string) {
    let stringSplit = string.toLowerCase().split("");
    return stringSplit.reduce((total, currVal) => {
        if (currVal === "a" || currVal === "e" || currVal === "i" || currVal === "o" || currVal === "u") {
            return total + 1;
        }
        return total
    },0)
}

console.log(vowels("Justino"));