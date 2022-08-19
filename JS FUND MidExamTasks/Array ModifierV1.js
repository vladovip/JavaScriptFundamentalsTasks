function arrayModifier(arr) {
  let arrOfNums = arr.shift().split(" ").map(Number);
  // console.log(currentArr);

  while (arr[0] != "end") {
    let commandLine = arr.shift().split(" ");
    let command = commandLine[0];
    let index1 = Number(commandLine[1]);
    let index2 = Number(commandLine[2]);

    switch (command) {
      case "swap":
        let temp = arrOfNums[index1];
        arrOfNums[index1] = arrOfNums[index2];
        arrOfNums[index2] = temp;
        break;
      case "multiply":
        arrOfNums[index1] *= arrOfNums[index2];
        break;
      case "decrease":
        for (let i = 0; i < arrOfNums.length; i++) {
          arrOfNums[i]--;
        }
        break;
    }
  }
  console.log(arrOfNums.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);


arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
