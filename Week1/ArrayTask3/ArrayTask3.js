'use strict';

const numbers = [];

let answer = prompt("Enter a number (or type 'done' to finish): ");

while (answer !== 'done' && answer !== null) {
    numbers.push(Number(answer));

    answer = prompt("Enter another number (or type 'done' to finish): ");
}

const output = document.querySelector("#output");

let evenNumbers = [];

for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

if (evenNumbers.length > 0) {
    output.textContent = "Even numbers: " + evenNumbers;
} else {
    output.textContent = "Even numbers: None";
}

console.log("Program ended.");