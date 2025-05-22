// Reverse an Array 
const data = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
  return [...arr].reverse();
}

const reversed = reverseArray(data);
console.log("Reversed Array:", reversed);


//Explain join()
const cities = ["Delhi", "Mumbai", "Pune"];

function showJoinExamples(list) {
  console.log("Original Array:", list);
  console.log("Join with comma (default):", list.join());
  console.log("Join with pipe:", list.join(" | "));
  console.log("Join with space:", list.join(" "));
  console.log("Join with newline:", list.join("\n"));
}

showJoinExamples(cities);


//Show All Array Values on Webpage using forEach + DOM

const languages = ["English", "Hindi", "French", "german"];

function renderList() {
  const ul = document.getElementById("languageList");
  if (!ul) return;

  languages.forEach((lang) => {
    const li = document.createElement("li");
    li.textContent = lang;
    ul.appendChild(li);
  });
}

renderList();

//Merge Two Sets Using Spread Operator and Set

const fruits = new Set(["Apple", "Banana", "Mango"]);
const vegetables = new Set(["Carrot", "Spinach", "Banana"]);

function getGroceryList(fruitSet, vegSet) {
  const combinedSet = new Set([...fruitSet, ...vegSet]);
  return Array.from(combinedSet).sort(); 
}

const finalList = getGroceryList(fruits, vegetables);
console.log("Grocery List:", finalList);



