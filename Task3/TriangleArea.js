function calculateTriangleArea(a, b, c) {
  
  const s = (a + b + c) / 2;

  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

const side1 = 5;
const side2 = 6;
const side3 = 7;

const triangleArea = calculateTriangleArea(side1, side2, side3);
console.log(`The area of the triangle is: ${triangleArea.toFixed(3)} square units`);
