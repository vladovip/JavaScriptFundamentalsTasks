function counterStrike(initialEnergyArr) {
  // counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
  //   counterStrike(["200", "54", "14", "28", "13", "End of battle"]);

  let startENY = Number(initialEnergyArr.shift());
  let command = "End of battle";
  let wonBattlesCounter = 0;
  //   console.log(currentDistance);
  let currentDistance = initialEnergyArr.shift();

  while (currentDistance !== command) {
    currentDistance = +currentDistance;

    if ( startENY < currentDistance ) {
      console.log(
        `Not enough energy! Game ends with ${wonBattlesCounter} won battles and ${startENY} energy`
      );
      startENY -= currentDistance;
      break;
    }
    startENY = startENY - currentDistance;
    wonBattlesCounter++;
    if (wonBattlesCounter % 3 === 0) {
      startENY += wonBattlesCounter;
    }
    currentDistance = initialEnergyArr.shift();
  }

  if (startENY >= 0) {
    console.log(`Won battles: ${wonBattlesCounter}. Energy left: ${startENY}`);
  }

}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
