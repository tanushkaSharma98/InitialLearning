function multiply() {
  
  let firstNumber = document.getElementById('num1').value;
  let secondNumber = document.getElementById('num2').value;

  
  let result = Number(firstNumber) * Number(secondNumber);

 
  document.getElementById('result').innerText = result;
}

function divide() {
  let firstNumber = document.getElementById('num1').value;
  let secondNumber = document.getElementById('num2').value;

  if (secondNumber == 0) {
    document.getElementById('result').innerText = "Cannot divide by zero";
  } else {
    let result = Number(firstNumber) / Number(secondNumber);
    document.getElementById('result').innerText = result;
  }
}
