function addAndSubstract(num1, num2, num3) {
  
    function add (a, b) {
     return a + b;
  }

  function substract(sumResult, c) {
     return sumResult - c;
  }

  let result = add (num1,num2);
  let finalResult = substract(result,num3);
  console.log(finalResult);

}
addAndSubstract(23, 6, 10);
addAndSubstract(1, 17, 30);
