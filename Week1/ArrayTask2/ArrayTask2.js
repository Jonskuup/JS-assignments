'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
    const number = Number(prompt("Enter a number: "));
    numbers.push(number);
}

console.log("Numbers: ", numbers);

const output = document.querySelector("#output");

output.textContent = "Numbers: " + numbers;

const searchNumber = Number(prompt("Enter a number to search: "));

if (numbers.includes(searchNumber)) {
    output.textContent += " The number " + searchNumber + " is found in the array.";
} else {
    output.textContent += " The number " + searchNumber + " is not found in the array.";
}

numbers.pop();
console.log("Updated numbers: ", numbers);
output.textContent += " Updated numbers: " + numbers;

numbers.sort((a, b) => a - b);
console.log(" Sorted numbers: ", numbers);
output.textContent += "Sorted numbers: " + numbers;