//the following function will sort the array in ascending order
function compareNumbers(a, b) {
  return a - b;
}


var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// result  [1, 2, 3, 4, 5]


let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// result  [1, 2, 3, 4, 5]


