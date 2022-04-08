/* Write a function that receives 3 parameters: a number, an operator (string) and another number. 
Print the result of the calculation on the console formatted to the second decimal point */ 

function solve(num1, strOperator, num2){

 let conversionOperator = strOperator.charAt(0);
 let result = 0; 
 switch (conversionOperator) {
     case '+': result = num1 + num2 ; break;
     case '-': result = num1 - num2; break;
     case '*': result = num1 * num2; break;
     case '/': result = num1 / num2; break;
     
 }
  console.log(result.toFixed(2));

}
solve(5,
    '/',
    10
    );
