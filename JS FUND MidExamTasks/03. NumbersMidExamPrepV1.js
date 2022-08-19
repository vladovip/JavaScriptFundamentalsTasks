function numbers(input) {
  let arrOfNums = input.split(" ").map(Number);
  let averageSum = 0;
  for (let index = 0; index < arrOfNums.length; index++) {
    averageSum += parseInt(arrOfNums[index]) / arrOfNums.length;
  }

  let tempArr = arrOfNums.filter((x) => x > averageSum);
  let sortedArrDescendinfOrder = tempArr.sort((a, b) => b - a);

  if (sortedArrDescendinfOrder.length <= 0) {
    console.log("No");
  } else {
    let resultArr = sortedArrDescendinfOrder.splice(0, 5);
    console.log(resultArr.join(" "));
  }

}

numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
