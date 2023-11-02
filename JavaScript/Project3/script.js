let numbers = [num1 = prompt("Give me a number."),
num2 = prompt("Give me another number"),
    num3 = prompt("Give me one more number")]

let total = 0;

for (let i = 0; i < numbers.length; i++){
    total += parseInt(numbers[i]);
}
alert(`The sum of all of your numbers is ${total}.`);