'use strict';

function sortArray(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    return sortedNumbers;
}

const numbers = [10, 8, 12, 7, 5, 2, 1];
console.log("Original numbers: ", numbers);

const sortedNumbers = sortArray(numbers);
console.log("Sorted array: ", sortedNumbers);