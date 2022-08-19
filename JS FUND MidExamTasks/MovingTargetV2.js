function movingTarget(inputArr) {

  let targetListArr = inputArr
    .shift()
    .split(" ")
    .map((element) => Number(element));
  // console.log(targetListArr);
  let commandLine = inputArr.shift();

  while (commandLine !== "End") {
    let tokens = commandLine.split(" ");
    let currentCommand = tokens[0];
    let param1 = +tokens[1];
    let param2 = +tokens[2];
    //   console.log(currentCommand,param1,param2);
    // TO DO Shoot, Add, Strike, End commands;
    if (currentCommand == "Shoot") {
      let tempIndex = param1;
      let power = param2;
      if (tempIndex >= 0 && tempIndex < targetListArr.length) {
        targetListArr[tempIndex] -= power;
      }
    }
    if (currentCommand == "Add") {
      let index = param1;
      let value = param2;
      if (index >= 0 && index < targetListArr.length) {
        targetListArr.splice(index, 0, value);
      } else {
        console.log(`Invalid placement!`);
      }
    }
    if (currentCommand == "Strike") {
      for (let index in targetListArr) {
        let indexOfCommand = param1;
        let radius = param2;
        if (index == indexOfCommand) {
          let startingIndex = indexOfCommand - radius;
          let deleteCounter = radius * 2 + 1;
          if (0 <= startingIndex && deleteCounter < targetListArr.length - 1) {
            targetListArr.splice(startingIndex, deleteCounter);
          } else if (
            startingIndex < 0 ||
            deleteCounter > targetListArr.length - 1
          ) {
            console.log(`Strike missed!`);
          }
        }
      }
    }

    commandLine = inputArr.shift();

    if (commandLine == "End") {
      break;
    }
  }
  
  console.log(`${targetListArr.join("|")}`);
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);

console.log(`*****************`);

movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
