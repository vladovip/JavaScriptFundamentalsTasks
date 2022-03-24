// function demoFunctions(a, b) {

//   let result = a + b;
//   return result;
// }
// console.log(demoFunctions(1,2));

// let functionResult = demoFunctions(5,5)
// console.log(functionResult);
// demoFunctions();


// Arrow Functions 
let functionArrow = (num1, num2) => num1 + num2;
console.log(functionArrow(3,3));

// Arrow Funcion 2 
let increment = x => x + 1;
console.log(increment(5));  // 6

// Arrow Funciton 3 == Arrow Function 2 
let increment = function(x) {
    return x + 1;
  }
  


function printStars(count) {
  console.log("*".repeat(count));
}
printStars(9);






//Function expression (useful in functional programming) 
let printTextExpression = function(text){
    console.log(text);
  }
  
  printTextExpression("Hello Vladimir,It is wonderful that you are learning JS. Expression!!!"); 
  
// Function declaration (recommended way)
function printTextDeclaration(text){
    console.log(text);
  }
  printTextDeclaration ("I am a function declaration!!");

  //Invocation from another function:
  function printDocument() {
    printLabel();
    printContent();
  }

  // Self-invocation (recursion):
  function countDown(x) {
    console.log(x);
    if (x > 0) { countDown(x - 1); }
  }

  // Functions Without Parameters, Does not receive arguments when invoked
  function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
  }
  printHeader();
  


// Avoid functions longer than one screen
// Split them into several shorter functions
function printReceipt(){
    printHeader();
    printBody();
    printFooter();
}

//Break large programs into simple functions that solve small sub-problems!!!



  