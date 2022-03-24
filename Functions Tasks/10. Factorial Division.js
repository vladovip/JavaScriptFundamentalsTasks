function factorialDivision(num1, num2) {
  
    function factorialCalculator(number) {
    let result = 1;
    while (number != 1) {
      result *= number;
      number -= 1;
    }
    return result;
  }
  let finalDivisionResult = factorialCalculator(num1) / factorialCalculator(num2)
  console.log(finalDivisionResult.toFixed(2));
}
factorialDivision(5, 2);


// A function can call itself. For example, here is a function that computes factorials recursively:
/* 
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }
  */
