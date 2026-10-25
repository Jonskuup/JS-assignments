'use strict';

const side1 = Number(prompt("Enter the first side of the triangle:"));
const side2 = Number(prompt("Enter the second side of the triangle:"));
const side3 = Number(prompt("Enter the third side of the triangle:"));

const output = document.querySelector("#output");

if (!(side1 > 0 && side2 > 0 && side3 > 0) ||
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1) { 

    output.textContent = "The given sides do not form a valid triangle.";

} else if (side1 === side2 && side2 === side3) {
    output.textContent = "The given sides form an equilateral triangle.";
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    output.textContent = "The given sides form an isosceles triangle.";
} else {
    output.textContent = "The given sides form a scalene triangle.";
}