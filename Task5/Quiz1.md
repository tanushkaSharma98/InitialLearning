# JavaScript Basics – Notes

---

## 1. What is JavaScript?

JavaScript is a scripting language used mainly for making websites interactive. It runs directly in the browser and lets you build things like sliders, popups, dropdowns, form validations, dynamic content updates, etc.

HTML gives structure, CSS handles the design, and JavaScript takes care of the behavior. It basically brings life to a static page.

Also, JS isn’t limited to browsers anymore — with things like Node.js, you can use it on the backend too.

---

## 2. What is the difference between `let` and `var`?

Both `let` and `var` are used to declare variables, but they behave differently:

- `var` is function-scoped, while `let` is block-scoped.
- `var` can be redeclared in the same scope; `let` can't.
- Variables declared with `var` are hoisted and initialized as `undefined`. With `let`, they’re hoisted but not initialized, so using them before declaration throws an error.

### Example:
```js
if (true) {
  var a = 10;
  let b = 20;
}

console.log(a); 
console.log(b); 
```

So yeah, `let` is safer and more predictable than `var`.

---

## 3. Why do we prefer `const` over `var`?

`const` is preferred because:
- It prevents reassignment
- It's block-scoped (like `let`)
- It avoids weird issues that come with `var` hoisting

If a value doesn’t need to change, just use `const`. It makes the code cleaner, more readable, and helps avoid bugs. `let` is for variables you know will change. `var` is... kinda outdated now.

---

## 4. What is the use of JavaScript in web browsers?

JavaScript is what makes a webpage dynamic.

Without it, everything would just sit there — you couldn’t click buttons to do things, fill out forms interactively, or update parts of the page without reloading.

Some real uses:
- Validate a form before it submits
- Create animations or transitions
- Show/hide content
- Load new data without reloading (AJAX)
- Handle button clicks, scrolls, etc.

Basically, it’s the reason modern websites feel like apps.

---

## 5. What are Objects?

Objects are used to store multiple values together as key-value pairs. Instead of making separate variables for name, age, etc., you just create one object.

### Example:
```js
const user = {
  name: "Aman",
  age: 21,
  isStudent: true
};
```

You can access values using dot notation (`user.name`) or bracket notation (`user["age"]`).  
Objects are super useful — almost everything in JavaScript is either an object or can be treated like one.

---

## 6. What is an array and how is it different from an object?

An array is a list of values stored in a single variable. It uses numbered indexes starting from 0.

### Example:
```js
const fruits = ["apple", "banana", "mango"];
```

You can access elements with their index: `fruits[0]` gives "apple".

**Difference from an object:**
- Arrays are ordered, objects are not.
- Arrays use indexes, objects use keys.
- Arrays are best for lists, objects for structured data.

So if you’re storing things like a list of names — use an array. If it’s more like a profile or a record, use an object.

---

## 7. What is a function?

A function is a reusable piece of code that performs a task. You write it once and use it as many times as you want.

### Example:
```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Jay")); 
```

Functions make code modular, easier to read, and maintain. You can also pass data into them using parameters and get results back using `return`.

---

## 8. How can we implement call by value and call by reference in JavaScript?

JavaScript passes **primitive types by value**, and **objects/arrays by reference**.

### Call by value (primitives):
```js
let a = 5;

function change(val) {
  val = 10;
}

change(a);
console.log(a); 
```

### Call by reference (objects/arrays):
```js
let obj = { num: 5 };

function update(o) {
  o.num = 10;
}

update(obj);
console.log(obj.num); 
```

So when you pass an object or array, the original can be modified. But for strings, numbers, booleans, etc., changes inside the function don’t affect the original.

---

## 9. What are the primitive data types in JavaScript?

There are 7 primitive types:

1. **String** – `"hello"`
2. **Number** – `42`, `3.14`
3. **Boolean** – `true` / `false`
4. **Undefined** – when a variable is declared but not assigned
5. **Null** – intentional absence of a value
6. **Symbol** – unique and immutable value (used for object keys)
7. **BigInt** – used for really large integers

Primitive types are immutable and stored by value — not by reference.

---

## 10. What is DOM?

DOM = Document Object Model.

It’s basically the structure of the webpage, represented as a tree of objects. Every HTML element becomes a node in this tree.

With JavaScript, you can access and manipulate this tree — meaning you can change content, style, or structure without touching the HTML file directly.

### Example:
```js
document.getElementById("title").innerText = "Hello JS!";
```

That line grabs an HTML element and changes its text using JS.

---

## 11. Why do we need DOM?

Because JavaScript needs a way to "see" and "change" the webpage.

DOM acts like a bridge between your HTML and your JS. Without DOM, JavaScript would have no way to access or modify what's on the screen.

Thanks to DOM:
- You can react to user actions
- You can add/remove elements dynamically
- You can update styles or content live

In short: **DOM is how JavaScript communicates with your webpage**.
