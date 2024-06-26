// arrayManipulation.js

// Function to process an array of numbers
function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}

// Export the function for use in other files
module.exports = { processArray };
