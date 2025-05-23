1. What is JavaScript?
JavaScript is a scripting language used mainly for making websites interactive. It runs directly in the browser and lets you build things like sliders, popups, dropdowns, form validations, dynamic content updates, etc.

HTML gives structure, CSS handles the design, and JavaScript takes care of the behavior. It basically brings life to a static page.



2. What is the difference between let and var?

Both let and var are used to declare variables, but they behave differently:
var is function-scoped, while let is block-scoped.
var can be redeclared in the same scope; let can't.

Example--

if (true) {
  var a = 10;
  let b = 20;
}

console.log(a); 
console.log(b); 


3. Why do we prefer const over var?

const is preferred because:

It prevents reassignment
It's block-scoped (like let)
It avoids weird issues that come with var hoisting.
If a value doesn’t need to change, just use const. It makes the code cleaner, more readable, and helps avoid bugs.


4. What is the use of JavaScript in web browsers?

JavaScript is what makes a webpage dynamic.
Without it, everything would just sit there — you couldn’t click buttons to do things, fill out forms interactively, or update parts of the page without reloading.

Some uses:

Validate a form before it submits
Create animations or transitions
Show/hide content


5. What are Objects?

Objects are used to store multiple values together as key-value pairs. Instead of making separate variables for name, age, etc., you just create one object.

Example:
const user = {
  name: "Aman",
  age: 21,
  isStudent: true
};


6. What is an array and how is it different from an object?

An array is a list of values stored in a single variable. It uses numbered indexes starting from 0.

const fruits = ["apple", "banana", "mango"];
You can access elements with their index: fruits[0]

Difference from an object:

Arrays are ordered, objects are not.
Arrays use indexes, objects use keys.
Arrays are best for lists, objects for structured data.


7. What is a function?

A function is a reusable piece of code that performs a task. You write it once and use it as many times as you want.

Example:

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Jay"));



8. How can we implement call by value and call by reference in JavaScript?

JavaScript passes primitive types by value, and objects/arrays by reference.

Call by value (primitives):
let a = 5;

function change(val) {
  val = 10;
}

change(a);
console.log(a); 


Call by reference (objects/arrays):
let obj = { num: 5 };

function update(o) {
  o.num = 10;
}

update(obj);
console.log(obj.num); 


9. What are the primitive data types in JavaScript?

There are 7 primitive types:

String – "hello"
Number – 42, 3.14
Boolean – true / false
Undefined – when a variable is declared but not assigned
Null – intentional absence of a value
Symbol – unique and immutable value (used for object keys)
BigInt – for very large integers


10. What is DOM?
DOM = Document Object Model.

It’s basically the structure of the webpage, represented as a tree of objects. Every HTML element becomes a node in this tree.

With JavaScript, you can access and manipulate this tree — meaning you can change content, style, or structure without touching the HTML file directly.

document.getElementById("title").innerText = "Hello";



11. Why do we need DOM?

Because JavaScript needs a way to "see" and "change" the webpage.
DOM acts like a bridge between your HTML and your JS. Without DOM, JavaScript would have no way to access or modify what's on the screen.
We can:
React to user actions
Add/remove elements dynamically
Update styles or content live




