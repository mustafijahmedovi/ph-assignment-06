1. What is the difference between var, let, and const?

answer- 
var : 

a. Old way of declaring variables.

b. Function-scoped (not block-scoped).

c. Can be re-declared and updated.

d. Hoisted (moved to top), but initialized with undefined.

let :
introduced in ES6.

Block-scoped (lives only inside {}).

Can be updated, but not re-declared in the same scope.

Hoisted but not initialized (gives error if used before declaration).

const:
Block-scoped.

Cannot be re-declared or reassigned.

Value is constant (but objects/arrays inside it can still be modified).


2) What is the difference between map(), forEach(), and filter()? 
answer-
map():

Creates a new array by transforming each element.

Always returns something.

forEach() :

Runs a function for each element.

Does not return a new array, just iterates.

filter():

Creates a new array with only elements that pass a condition.


3) What are arrow functions in ES6?
answer- 
Shorter way to write functions.

Syntax: const func = (args) => expression;

They don’t have their own this, they use the this from the outer scope.
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(2, 3)); // 5


4) How does destructuring assignment work in ES6?
 answer- 
 Lets you unpack values from arrays or objects into variables easily.

// Array destructuring
const nums = [10, 20, 30];
const [a, b] = nums;
console.log(a, b); // 10 20

// Object destructuring
const person = { name: "Ovi", age: 22 };
const { name, age } = person;
console.log(name, age); // Ovi 22


5) Explain template literals in ES6. How are they different from string concatenation?
answer;

Strings written with backticks (`).

Allow variables inside strings using ${}.

Support multi-line strings.

let name = "Ovi";
let age = 22;

// Old way
let oldStr = "My name is " + name + " and I am " + age + " years old.";

// Template literal
let newStr = `My name is ${name} and I am ${age} years old.`;

console.log(newStr);

Difference from concatenation:

Easier to read.

Supports multi-line formatting.

No need for + signs.
