#!/usr/bin/node
<<<<<<< HEAD
//  Prints a message depending on number of arguments passed
const args = process.argv;
if (process.argv === 2) {
  console.log("No argument");
} else if (process.argv === 3) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
=======
// Prints a message depending on number of arguments passed
args = process.argv;
if (args.length === 2) {
	  console.log('No argument');
} else if (args.length === 3) {
	  console.log('Argument found');
} else {
	  console.log('Arguments found');
>>>>>>> 09620b1680f2742e71cf4a01bcf47e526a4559ce
}
