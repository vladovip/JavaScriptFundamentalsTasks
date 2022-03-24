// There are three ways for a function to refer to itself:
// A function that calls itself is called a recursive function.
var foo = function bar() {
    // statements go here
 }
 /* Within the function body, the following are all equivalent:
1.  bar()
2.  arguments.callee()
3.  foo() */ 



/// example of recursive function declaration : 
function loop(x) {
    if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
      return;
    // do stuff
    loop(x + 1); // the recursive call
  }
  loop(0);


  //For example, getting all the nodes of a tree structure (such as the DOM) is easier via recursion:
  function walkTree(node) {
    if (node == null) //
      return;
    // do something with node
    for (var i = 0; i < node.childNodes.length; i++) {
      walkTree(node.childNodes[i]);
    }
  }

  // another example of Recursive Function: 
  function foo(i) {
    if (i < 0)
      return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
  }
  foo(3);
  // Output:
  // begin: 3
  // begin: 2
  // begin: 1
  // begin: 0
  // end: 0
  // end: 1
  // end: 2
  // end: 3

  
// nested Functions: 

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  a = addSquares(2, 3); // returns 13
  b = addSquares(3, 4); // returns 25
  c = addSquares(4, 5); // returns 41



  // Another Example of nested Functions:
  function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3); //Think of it like: give me a function that adds 3 to whatever you give it.
  result = fn_inside(5); //returns 8 
  result1 = outside(3)(5); // returns 8


  // Function Chaining or Scope Chaining
  //In this example, C accesses B's y and A's x.  : 
  function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); 
  // console.log = 6  (1 + 2 + 3)
  // In other words, function C chains the scopes of  function B and  function A, in that order.
  //The reverse, however, is not true. 



  //More nested scopes take precedence.So, the inner-most scope takes the highest precedence, 
  //while the outer-most scope takes the lowest.This is the scope chain. Example below:
  function outside() {
    var x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  outside()(10); // returns 20 instead of 10.




  // closures example: 
  var getCode = (function() {
    var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
    return function() {
      return apiCode;
    };
  })();
  
  getCode();    // Returns the apiCode





  // function that concatenates several strings :
  
  function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }
 myConcat(', ', 'red', 'orange', 'blue'); // returns "red, orange, blue, "


 // Arrow Function : 
 var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
var a2 = a.map(function(s) { return s.length; });
console.log(a2); // logs [8, 6, 7, 9]
var a3 = a.map(s => s.length);
console.log(a3); // logs [8, 6, 7, 9]