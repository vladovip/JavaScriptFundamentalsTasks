function factorial(n) {
  if (n === 0 || n === 1){
    return 1;
  } 
  else {
    return n * factorial(n - 1);
  }
}
  

var a, b, c, d, e;
a = factorial(1); // a gets the value 1
console.log(a);
b = factorial(2); // b gets the value 2
console.log(b);
c = factorial(3); // c gets the value 67
console.log(c);
d = factorial(4); // d gets the value 24
console.log(d);
e = factorial(5); // e gets the value 120
console.log(e);
