//we have an array of objects
//how do we simulate dealing cards one at a time
//player who has a had
//computer will have a hand

//exporting dealCards function
exports.dealCards = (arr) => {
  //arr is an array of 10 objects
  let counter = 0;
  let playerHand = [];
  let computerHand = [];

  //iterate through array, if counter is even give card to playerHand array/odd to computerHand array and increment counter by 1 each time around.
  arr.forEach((el) => {
    if (counter % 2 === 0) {
      playerHand.push(el);
    } else {
      computerHand.push(el);
    }
    counter++;
  });
  return [playerHand, computerHand];
};

//function that takes an array and sorts values in ascending order.
exports.cardSort = (arr) => {
  arr.sort((a, b) => {
    a.value - b.value;
  });
  return arr;
};

// build a function that converts values equally
// @passes in array of objects
exports.valueConverter = (arr) => {
  let newCardArray = arr.map((el) => {
    switch (el.value) {
      case "JACK":
        el.value = 11;
        break;
      case "QUEEN":
        el.value = 12;
        break;
      case "KING":
        el.value = 13;
        break;
      case "ACE":
        el.value = 14;
        break;
      default:
        el.value = Number(el.value);
    }
    return el;
  });
  return newCardArray;
};
