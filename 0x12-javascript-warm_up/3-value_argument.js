#!/usr/bin/node
// Check if the first argument is provided
// If no arguments are passed, print "No argument"
// Print the first argument passed to the script
if (process.argv[2] === undefined) {
  console.log("No argument");
} else {
  console.log(process.argv[2]);
}
