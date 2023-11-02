let customerName = prompt("Tell me your name.");
let num1 = prompt("Give me a number.");
let num2 = prompt("Give me another number.");

function greeting(name) {
    document.write("You are going to have a wonderful day, "+ name + ".")
}

greeting(customerName);

function sum(add) {
    document.write(" By the way, the sum of your numbers is " + add + ".");
}

sum(parseInt(num1) + parseInt(num2));