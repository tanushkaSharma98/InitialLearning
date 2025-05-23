1. Why do we use functions in JavaScript?

To avoid repeating code again and again. Functions let us define logic once and reuse it anywhere. Also makes code cleaner and modular.

2. What is Function Invocation?

It’s just calling or running a function using ().

Example:

function greet() {
  console.log("Hello!");
}

greet();

3. Does a function behave like an object in JavaScript? Prove it by an example.

Yes, functions are objects in JS. You can add properties to them.

Example:

function greet() {
  return "hi";
}

greet.lang = "English";
console.log(greet.lang);

4. What are Events in JavaScript?

Events are actions that happen on the page — like clicks, keypress, scroll, etc. We can write code to run when those things happen.

5. What is a string?

A string is a series of characters written inside quotes.

Example:

let name = "Jay";
We use it to store text.

6. What is an array? Is it static or dynamic in JavaScript?

Array is a list of items stored in one variable.
It’s dynamic — you can change its size any time.

Example:

let items = ["pen", "pencil", "eraser"];
items.push("scale");

7. Difference between Map and Set?

Map stores key-value pairs.
Set stores only unique values.

Example:

let map = new Map();
map.set("name", "Jay");

let set = new Set();
set.add("apple");
set.add("apple");

8. Difference between Array and Map?

Array stores values using index.
Map stores key-value pairs and keys can be any type.

Example:

let arr = ["a", "b"];
console.log(arr[0]);

let map = new Map();
map.set("a", 1);
map.set(10, "ten");

console.log(map.get("a"));
console.log(map.get(10));

9. What are array methods? List a few names.

Built-in functions for arrays — they help in adding, removing, searching, looping, etc.

Common ones:
push, pop, shift, unshift, map, filter, forEach, reduce, includes

Examples:

let arr = [1, 2, 3];

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(0);
console.log(arr);

let doubled = arr.map(num => num * 2);
console.log(doubled);

let even = arr.filter(num => num % 2 === 0);
console.log(even);

arr.forEach(num => console.log("Item:", num));

let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

console.log(arr.includes(2));
console.log(arr.includes(100));

10. In how many ways can we traverse through an array in JavaScript?

Few common ways:

1.for loop
2.for...of loop
3.forEach() method
4.map() method
5.while loop