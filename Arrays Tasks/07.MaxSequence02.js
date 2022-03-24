function solve(arr) {
  let finalArray = [];
  let tempArray = [];

  for (let index = 0; index < arr.length; index++) {
    tempArray = []; // refresh array on every step;

    for (let j = index; j < arr.length; j++) {
      if (arr[index] === arr[j]) {
        tempArray.push(arr[j]);
      } else {
        break;
      }
      if (tempArray.length > finalArray.length) {
        finalArray = tempArray;
      }
    }
  }
  console.log(finalArray.join(" "));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
