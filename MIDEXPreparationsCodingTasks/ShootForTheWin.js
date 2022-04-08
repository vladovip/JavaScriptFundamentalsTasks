function shootForTheWin(input) {
  let shootedTargetsList = input[0].split(" ").map(Number);
  // console.log(shootedTargetsList);
  let commandsIndices = input.shift();
  //console.log(commandsIndices);
  let countOfShootedTargets = 0;


  while (commandsIndices !== "End") {
    let operationalIndex = Number(commandsIndices);

    if (operationalIndex >= 0 && operationalIndex < shootedTargetsList.length) {
      for (let index = 0; index < shootedTargetsList.length; index++) {
        let currentTarget = shootedTargetsList[operationalIndex];
        if (operationalIndex !== index && shootedTargetsList[index] !== -1) {
          if (shootedTargetsList[index] > currentTarget) {
            shootedTargetsList[index] -= currentTarget;
          } else {
            shootedTargetsList[index] += currentTarget;
          }
        }
      }
      shootedTargetsList[operationalIndex] = -1;
      countOfShootedTargets++;
    }
    commandsIndices = input.shift();
  }

  console.log(
    `Shot targets: ${countOfShootedTargets} -> ${shootedTargetsList.join(" ")}`
  );
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
