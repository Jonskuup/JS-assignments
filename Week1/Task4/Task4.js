'use strict';

const score = Number(prompt("Enter your course score (0-100): "));
const output = document.querySelector("#output");

if (score >= 0 && score <= 39) {
    output.textContent = "Grade: 0";
} else if (score >= 40 && score <= 51) {
    output.textContent = "Grade: 1";
} else if (score >= 52 && score <= 63) {
    output.textContent = "Grade: 2";
} else if (score >= 64 && score <= 75) {
    output.textContent = "Grade: 3";
} else if (score >= 76 && score <= 87) {
    output.textContent = "Grade: 4";
} else if (score >= 88 && score <= 100) {
    output.textContent = "Grade: 5";
} 