#!/usr/bin/node
<<<<<<< HEAD
// Prints a message depending on number of arguments passed
args = process.argv;
if (args.length === 2) {
  console.log("No argument");
} else if (args.length === 3) {
=======
//  Prints a message depending on number of arguments passed

const args = process.argv;
if (process.argv === 2) {
  console.log("No argument");
} else if (process.argv === 3) {
>>>>>>> 27c72891a6d29a468481e445effa3eb02f572b1e
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

