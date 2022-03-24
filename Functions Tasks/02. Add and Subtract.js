function solve(num1, num2, num3) {

    function sum(a, b) {
        return (a + b);
    }
     let sumResult = sum (num1, num2);
    

    function subtractNumber(a,b){
      return (a-b);
    }
    let resultSubtract = subtractNumber(sumResult,num3)
    console.log(resultSubtract);

}
solve(42, 58, 100 );