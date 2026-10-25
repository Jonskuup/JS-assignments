'use strict';

const number = Number(prompt("Enter a positive integer: "));
const output = document.querySelector("#output");

let sum = 0;

for (let i = 1; i <= number; i++) {
    sum = sum + i;
}

output.textContent = "The sum is " + sum;
