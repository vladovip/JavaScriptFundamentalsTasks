function solve(firstNum, operator, secondNum) {
  let result = 0;

  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
  }
  console.log(result.toFixed(2));
}
solve("3", "*", "10");
