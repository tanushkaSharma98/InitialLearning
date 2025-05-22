//function that generates a random number between two ranges, -100 to 0 and 800-900

function radomInTwoRange(min1, max1, min2, max2) {
  const pickRangeOne = Math.random() < 0.5;

  if (pickRangeOne) {
    return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
  } else {
    return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
  }
}

const nums = [];
for (let i = 0; i < 8; i++) {
  nums.push(radomInTwoRange(-100, 0, 800, 900));
}

console.log("Sample Random Numbers:", nums);
