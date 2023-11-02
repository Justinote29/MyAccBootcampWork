// 1.  We set orange to equal the apple so they now both references or "addresses" for the same data in memory. When we changed the type of orange to 'Clementine' we are changing the contents of the key:value pairs found at that "address" in memory so apple.type also returns 'clementine'.  This is a deep or true copy of the object.  To fix this we need to make a shallow copy of apple and assign it to orange using spread (below).

const apple = {
  type: "Granny Smith",
  weight: 4,
};

const orange = { ...apple };

orange.type = "Clementine";
console.log("Apple type is", apple.type);
console.log("Orange type is", orange.type);

// 2.  When we use objects, the variable name is just where we store the data that is in key:value pairs so if we compare the names of the objects, it's like we're comparing addresses of two identical houses.  The addresses are different even if the houses are exactly the same.  If we dig deeper in the objects like school_a.name == school_b.name we will get true because there we are actually comparing the values of keys in the objects like we might compare two identical stoves within the houses.

var school_a = { name: "UTexas", place: "Austin" };
var school_b = { name: "UTexas", place: "Austin" };

console.log(school_a == school_b); // returns false

var school_a = { name: "UTexas", place: "Austin" };
var school_b = { name: "UTexas", place: "Austin" };

console.log(school_a.name == school_b.name); //returns true
