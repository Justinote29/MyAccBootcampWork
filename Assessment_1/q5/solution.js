

//This array sets a variable, hayIndex to be equal to the index of the first occurrence of 'hay'.Then if the index is not - 1, which means it wasn't found, it returns the string 'found work at position + hayIndex (the index of the first occurrence of hay).


function findHay(array) {
    let hayIndex = array.indexOf('hay');
    if (hayIndex != -1) {
        return `found the word at position ${hayIndex}`;
    }
}


console.log(findHay(['hadd', 'junk', 'had', 'something', 'nothing', 'hay']));