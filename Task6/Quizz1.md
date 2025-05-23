1. What are anonymous functions in JavaScript?

Anonymous functions are functions without a name. They are mostly used as function expressions or passed as arguments. Example:

setTimeout(function() {
  console.log("Hello");
}, 1000);
They’re useful when you don’t need to reuse the function elsewhere.

2. Explain strict comparison and abstract comparison in JavaScript

Strict Comparison (===) checks value and type. No conversion.

5 === '5'; // false
Abstract Comparison (==) does type conversion if needed.

5 == '5'; // true
Strict is more predictable, that’s why preferred.

3. Difference between arrow functions and regular functions

Arrow functions are shorter:

const add = (a, b) => a + b;
They don’t have their own this, which is useful in some cases like inside callbacks.

Can’t be used as constructors.

No arguments object inside them.

4. What is Hoisting in JavaScript?

JavaScript moves declarations to the top of the scope during compilation. So, you can use functions and vars before declaring.

console.log(a); 
var a = 10;

greet(); 
function greet() {
  console.log("Hello");
}
Only var and functions are fully hoisted. let and const are hoisted but not initialized.

5. JavaScript is a garbage collected programming language. Explain how.

JavaScript automatically frees memory that’s no longer used. When no references point to an object, it's considered unreachable and gets removed in garbage collection.

You don’t manually free memory; the JS engine handles that behind the scenes.

6. Explain Shallow copy vs Deep copy in JavaScript

Shallow Copy (Surface-level copy):
A shallow copy means we copy only the outer shell of an object.
But if that object contains another object inside it (nested object), the reference (pointer) is shared, not duplicated.
Think of it like making a photocopy of a folder — the outer file is copied, but the paper inside is the same original one.

Deep Copy:
A deep copy means we copy the object completely, including everything inside — even the nested objects are brand new and separate.
It’s like creating a new folder and manually rewriting everything inside — so changes to one do not affect the other.

Example:

let original = {
  name: "Amit",
  contact: {
    email: "amit@m.com",
    phone: "1234567890"
  }
};

let shallow = { ...original };

shallow.contact.email = "shallow@m.com";

console.log("Shallow Copy:");
console.log("Original Email:", original.contact.email);  
console.log("Shallow Email:", shallow.contact.email);    

let deep = JSON.parse(JSON.stringify(original));

deep.contact.email = "deep@m.com";

console.log("\nDeep Copy:");
console.log("Original Email:", original.contact.email);  
console.log("Deep Email:", deep.contact.email); 

7. What is Object.freeze?

It makes an object immutable. You can't add, delete or change properties.

let obj = { name: "Ram" };
Object.freeze(obj);
obj.name = "Shyam"; // will not work
