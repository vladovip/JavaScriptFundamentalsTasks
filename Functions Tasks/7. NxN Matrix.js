function nXnMatrixPrinting (number) {
     
let result = "";
for (let index = 1; index <= number; index++) {
    result += number + " " ; 
} 
let stringResult = result;
// console.log(result);

for (let i = 1; i <= number; i++) {
    console.log(stringResult);
  }
 

// console.log(result);

}
nXnMatrixPrinting (3)