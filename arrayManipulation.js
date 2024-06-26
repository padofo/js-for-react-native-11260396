// arrayManipulation.js

// Function to process an array of numbers
function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}

// Export the function for use in other files
module.exports = { processArray };

// arrayManipulation.js

// Function to process an array of numbers
function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}

// Function to format strings based on their corresponding processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Export the functions for use in other files
module.exports = { processArray, formatArrayStrings };
