1. Explain as much as you know about objects in JavaScript

Objects in JavaScript are one of the most essential and core data types. Everything in JS that's not a primitive (like string, number) is basically an object.

An object is a collection of key-value pairs, where keys are strings (or symbols) and values can be anything — numbers, strings, functions, arrays, other objects, etc. These key-value pairs are called properties.

You can create an object in a few different ways:

Using object literals:

let car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2021
};

Using the Object constructor:

let obj = new Object();
obj.name = 'Jay';


let person = {
  name: 'Ram',
  greet: function() {
    console.log(`Hi, I’m ${this.name}`);
  }
};

Objects can also be nested:

let user = {
  name: 'Rahul',
  address: {
    city: 'Jaipur',
    pin: 302001
  }
};


2. Read the code and convert to class-based OOP in JavaScript

Given object-based vector template:

var vector = {
  _x: 0,
  _y: 0,
  create: function(x, y){
    var obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    return obj;
  },
  setX: function(x) { this._x = x; },
  setY: function(y) { this._y = y; },
  getX: function() { return this._x; },
  getY: function() { return this._y; }
};

Class-based alternative using modern JavaScript:

class Vector {
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }

  setX(x) {
    this._x = x;
  }

  setY(y) {
    this._y = y;
  }

  getX() {
    return this._x;
  }

  getY() {
    return this._y;
  }
}

const v1 = new Vector(10, 20);
console.log(v1.getX()); 
console.log(v1.getY()); 

This approach uses modern JS classes and feels cleaner, especially when working with multiple instances.

3. Do you think JavaScript is the language of the future?

Yes, I honestly think JavaScript is here to stay and probably will dominate even more in the future. It’s already the most used language for web development — both on the client-side (frontend) and server-side (thanks to Node.js).

The ecosystem is huge: React, Angular, Vue on frontend; Node.js, Express on backend; tons of NPM packages; and it’s supported by every browser out there.

Also, it keeps evolving — with ES6 async/await, modules, etc., it's way more powerful than it used to be.

And not just websites — now you can build mobile apps (React Native), desktop apps (Electron), even games and AI apps using JS. So yeah, it’s not perfect, but it's flexible, fast-evolving, and everywhere. Definitely the language of the future (at least near future).