#!/usr/bin/node
function printArgument() {
    if (arguments.length === 0) {
        console.log(0);
    } else if (arguments.length === 1) {
        console.log(0);
    } else {
        // Handle other cases where arguments are provided
        // For now, let's just print the arguments
        console.log(...arguments);
    }
}

// Test cases
printArgument();          // Output: 0
printArgument(5);         // Output: 0
printArgument(2, 4, 6);   // Output: 2 4 6

