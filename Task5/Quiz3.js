//Implementation of common array methods

const sampleArr = [10, 20, 30, 40, 50];

// a. forEach
function printItemsWithForEach(arr) {
  arr.forEach((item, index) => {
    console.log(`Index: ${index}, Value: ${item}`);
  });
}

// b. map
function doubleValues(arr) {
  return arr.map((num) => num * 2);
}

// c. filter
function filterGreaterThan25(arr) {
  return arr.filter((num) => num > 25);
}

// d. reduce
function sumAll(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// e. includes
function hasThirty(arr) {
  return arr.includes(30);
}

// f. some
function anyAbove45(arr) {
  return arr.some((num) => num > 45);
}

// g. every
function allPositive(arr) {
  return arr.every((num) => num > 0);
}

printItemsWithForEach(sampleArr);
console.log("Doubled:", doubleValues(sampleArr));

console.log("Filtered >25:", filterGreaterThan25(sampleArr));

console.log("Sum:", sumAll(sampleArr));

console.log("Includes 30:", hasThirty(sampleArr));

console.log("Any above 45:", anyAbove45(sampleArr));

console.log("All positive:", allPositive(sampleArr));


//Simple array implementation
const colors = ["red", "green", "blue"];
colors.push("yellow"); 
const firstColor = colors.shift();  
const newColors = colors.map(c => c.toUpperCase());

console.log("Colors:", colors);
console.log("First color removed:", firstColor);
console.log("Colors uppercase:", newColors);



// ToDo List Task Management

const ToDo = [];
const Completed = [];

let lastTaskId = 0; 

function addTask(title) {
  if (!title.trim()) return -1;    

  lastTaskId++;
  const newTask = { id: lastTaskId, task: title };
  ToDo.push(newTask);
  return newTask.id;
}

function removeTask(id) {
  const index = ToDo.findIndex(task => task.id === id);
  if (index === -1) return false;

  ToDo.splice(index, 1);
  return true;
}

function updateTask(id, newTitle) {
  if (!newTitle.trim()) return false;

  const task = ToDo.find(task => task.id === id);
  if (!task) return false;

  task.task = newTitle;
  return true;
}

function markTaskCompleted(id) {
  const index = ToDo.findIndex(task => task.id === id);
  if (index === -1) return false;

  const [completedTask] = ToDo.splice(index, 1);
  Completed.push(completedTask);
  return true;
}

console.log("Add task id:", addTask("Learn JavaScript"));

console.log("Add task id:", addTask("Build a ToDo app"));

console.log("Remove task result:", removeTask(5));     

console.log("Update task result:", updateTask(1, "Master JavaScript"));

console.log("Mark completed result:", markTaskCompleted(1));

console.log("ToDo List:", ToDo);

console.log("Completed List:", Completed);
