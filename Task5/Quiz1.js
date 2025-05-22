//Find Average of Numbers in an Array

const marks = [80, 70, 90, 85, 75];

function calculateAverage(arr) {
  if (!arr.length) return 0;
  const total = arr.reduce((acc, val) => acc + val, 0);
  return total / arr.length;
}

const avg = calculateAverage(marks);
console.log("Average Marks:", avg);


//Swap Two Numbers by Reference

function swapValues(obj) {
  const temp = obj.x;
  obj.x = obj.y;
  obj.y = temp;
}

const values = { x: 15, y: 30 };
swapValues(values);
console.log("Swapped Values:", values); 

//Print Fibonacci Series

function getFibonacciSeries(count) {
  if (count <= 0) return [];

  const fib = [0];
  if (count > 1) fib.push(1);

  for (let i = 2; i < count; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

console.log("Fibonacci Series:", getFibonacciSeries(10));


//Sort Array in Ascending and Descending Order

const num = [42, 13, 9, 75, 27];

const Asc = [...num].sort((a, b) => a - b);
const Desc = [...num].sort((a, b) => b - a);

console.log("Ascending Order:", Asc);
console.log("Descending Order:", Desc);

//Display Variable on HTML Page using DOM

const message = "Hello";
document.getElementById("output").textContent = message;

