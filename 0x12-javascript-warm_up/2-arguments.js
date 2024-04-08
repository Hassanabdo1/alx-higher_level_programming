#!/usr/bin/node
//  Prints a message depending on number of arguments passed
const args = process.argv;
if (process.argv === 2) {
  console.log("No argument");
} else if (process.argv === 3) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
