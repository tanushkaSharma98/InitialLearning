### 1. What are anonymous functions in JavaScript?

Anonymous functions are functions without a name. They are mostly used as function expressions or passed as arguments. Example:

```javascript
setTimeout(function() {
  console.log("Hello");
}, 1000);
```

They’re useful when you don’t need to reuse the function elsewhere.

---

### 2. Explain strict comparison and abstract comparison in JavaScript?

* **Strict Comparison (`===`)** checks value and type. No conversion.

```javascript
5 === '5'; // false
```

* **Abstract Comparison (`==`)** does type conversion if needed.

```javascript
5 == '5'; // true
```

Strict is more predictable, that’s why preferred.

---

### 3. Difference b/w arrow functions and regular functions?

* Arrow functions are shorter:

```javascript
const add = (a, b) => a + b;
```

* They don’t have their own `this`, which is useful in some cases like inside callbacks.
* Can’t be used as constructors.
* No `arguments` object inside them.

---

### 4. What is Hoisting in JavaScript?

JS moves declarations to the top of the scope during compilation. So, you can use functions and vars before declaring.

```javascript
console.log(a); 
var a = 10;

greet(); 
function greet() {
  console.log("Hello");
}
```

Only `var` and functions are fully hoisted. `let` and `const` are hoisted but not initialized.

---

### 5. JavaScript is a garbage collected programming language, explain how?

JS automatically frees memory that’s no longer used. When no references point to an object, it's considered unreachable and gets removed in garbage collection.

You don’t manually free memory, the JS engine handles that behind the scenes.

---

### 6. Explain Shallow copy vs Deep copy in Javascript?

* **Shallow copy** copies only the top-level. Nested objects still refer to the same memory.

```javascript
let original = { a: 1, b: { c: 2 } };
let shallow = { ...original };
shallow.b.c = 10; 
```

* **Deep copy** duplicates everything.

```javascript
let deep = JSON.parse(JSON.stringify(original));
```

Now `deep.b.c` won't affect `original`.

---

### 7. What is Object.freeze?

It makes an object immutable. You can't add, delete or change properties.

```javascript
let obj = { name: "Ram" };
Object.freeze(obj);
obj.name = "Shyam"; // willnot work
```

Useful to lock objects so they can’t be messed with later.
