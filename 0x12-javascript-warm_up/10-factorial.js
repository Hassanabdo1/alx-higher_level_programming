#!/usr/bin/node
function factorial(n) {
	    if (isNaN(parseInt(n))) {
		            console.log("Factorial of NaN is 1");
		            return 1;
		        }
	    
	    n = parseInt(n);

	    if (n === 0 || n === 1) {
		            console.log("The factorial of", n, "is:", 1);
		            return 1;
		        } else {
				        const result = n * factorial(n - 1);
				        console.log("The factorial of", n, "is:", result);
				        return result;
				    }
}

// Example usage:
factorial(5); // Output: The factorial of 5 is: 120
factorial("3"); // Output: The factorial of 3 is: 6
factorial("abc"); // Output: Factorial of NaN is 1
 
