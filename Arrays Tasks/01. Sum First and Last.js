function solve(numbersInput){

let firstNumber = Number(numbersInput.shift());
let lastNumber =  Number(numbersInput.pop());

let result = firstNumber+lastNumber;
console.log(result);
// return result;

}

// let result = solve(['20', '30', '40']);
solve(['20', '30', '40']);