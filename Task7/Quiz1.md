1. What are the basic data types in TypeScript?

TypeScript builds on JavaScript, so it already has the JS types, but it adds type safety on top. The basic data types I usually use are:

string – for text like names, messages, etc.

number – for any numeric values (integers, decimals).

boolean – true or false.

any – when we don’t want TypeScript to check the type (basically disables type-checking for that variable).

unknown – kinda like any but safer, forces you to do some checks before using it.

void – usually for functions that don’t return anything.

null and undefined – self-explanatory, but TS lets us type these explicitly.

never – used for functions that never return (like ones that throw errors or run forever).

Arrays – like string[], number[], etc.

Tuples – fixed-length arrays with fixed types, like [string, number]

Enums – if you want to define a set of named constants.

These types help a lot in catching bugs before running the code.

2. What is Generic data type?

Generics are like placeholders for types. It is like instead of locking your function or class to work with a specific type, you make it flexible. 
For example:
function identity<T>(value: T): T {
  return value;
}
Here, T is a generic type. When we call the function, TS figures out what T should be based on what we pass. So, identity<string>("hello") will return a string, and identity<number>(100) will return a number.

It’s super useful when writing reusable components or utility functions that work with multiple data types.

3. What is type inferring in TypeScript?

TypeScript is actually smart. If you declare something like:
let name = "John";

Even without telling it, TS will figure out that name is a string. This is called type inference. It infers the type based on the value.

So in most cases, we don’t have to write the type explicitly — unless you are writing complex logic.

4. What are the possible ways to define typing for functions?

There are a few ways we can define types for functions. I usually follow any of these depending on how complex the function is:

Inline annotations:

function greet(name: string): string {
  return `Hello, ${name}`;
}

Function type expressions:

const greet: (name: string) => string = (name) => {
  return `Hello, ${name}`;
};

Using interfaces or types:

type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => {
  return `Hello, ${name}`;
};
These make things really neat.

5. How to define Generic type for Classes?

Just like functions, classes can be generic too. This is helpful when the class works with different types of data. Here’s how we usually define it:

class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("hello");
