import { useLayoutEffect } from "react";

const accountId = 564552;
let accountEmail = "Tushar@gmail.com";
var accountPass = "Pass@123";
// accountCity = "Chatrapati Sambhajinagar"

// accountId = 5664; TypeError: Assignment to constant variable.
// once you define a variable you cannot change the value of the constant variable.


accountEmail = "harsh@123"
accountPass = "passss"
console.log(accountId);


console.table([accountId,accountEmail,accountPass]);

/*
#Types of variables in JavaScript 
**Variables = Data Containers
1. var => Old way (function-scoped). Not recommended now.
2. let => New way (block-scoped). Can be changed.
3. const => Block-scoped. Cannot be changed.
*/

// Rules for Variables in JavaScript:

/*Must start with a letter, _, or $
1.Cannot start with a number
2.Cannot use reserved words (like let, if, class)
3.Case-sensitive (name ≠ Name)
*/
  

let firstName = "Tushar";
let lastName = "Sonwane";
let fullName = firstName + " " + lastName;

console.log(fullName);

// Print to console:- Use console.log() — it shows output in the browser console or terminal 

// Print on Web Page:- Use document.write() — writes directly to the HTML page.

// Show Message Box: Use alert() — shows a popup message.

// Print in a Specific HTML Element:- Use innerHTML to print inside an element (like a <p> tag).

// Console.table(): console.table() displays arrays or objects as a table in the browser console 
// — it’s super useful for debugging and visualizing data clearly.
// Example:

let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.table(fruits);

// console.error:- Used to show error messages (in red) in the console.
// Example:

let age = -5;

if (age < 0) {
  console.error("Error: Age cannot be negative!");
}

console.log(age);

// console.warn():- Used to show warning messages (in yellow) in the console.

// Example:
let marks = 35;

if (marks < 40) {
  console.warn("Warning: Student has low marks!");
}
console.log(marks);


