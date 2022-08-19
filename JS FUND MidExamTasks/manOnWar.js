function manOnWar(inputArr) {
  let pirateShipStatus = inputArr.shift().split(">"); // "12>13>11>20>66",  ->  [ '12', '13', '11', '20', '66' ]
  let warShipStatus = inputArr.shift().split(">"); //  "12>22>33>44>55>32>18",

  let maximHealhPerSection = Number(inputArr.shift()); // "70",
  let commandLineInfo = inputArr.shift();

  while (commandLineInfo !== "Retire") {

    let tokens = commandLineInfo.split(" ");
    let command = tokens[0];
    let param1 = tokens[1];
    let param2 = tokens[2];
    let param3 = tokens[3];

    if (command === "Fire") {
      //	"Fire {index} {damage}"
      //     "Fire 2 11",
      let attackIndex = Number(param1);
      let damage = Number(param2);
      if (attackIndex >= 0 && attackIndex < warShipStatus.length) {
        warShipStatus[attackIndex] -= damage;
        if (warShipStatus[attackIndex] <= 0) {
          console.log(`"You won! The enemy ship has sunken.`);
          break;
        }
      }
    }

    if (command == "Defend") {
      // "Defend {startIndex} {endIndex} {damage}"
      // "Defend 3 6 11",
      let startindex = Number(param1);
      let endIndex = Number(param2);
      let damage = Number(param3);
      if (
        startindex >= 0 &&
        startindex < pirateShipStatus.length &&
        endIndex >= 0 &&
        endIndex < pirateShipStatus.length &&
        startindex <= endIndex
      ) {
        for (let i = startindex; i <= endIndex; i++) {
          pirateShipStatus[i] -= damage;
        }
      }
      for (let el of pirateShipStatus) {
        if (el <= 0) {
          console.log(`You lost! The pirate ship has sunken.`);
          break;
        }
      }
    }

    if (command === "Repair") {
      //  "Repair 1 33",
      //  "Repair {index} {health}"
      let index = Number(param1);
      let health = Number(param2);
      if (index >= 0 && index < pirateShipStatus.length) {
        pirateShipStatus[index] += health;
        if (pirateShipStatus[index] >= maximHealhPerSection) {
          pirateShipStatus[index] = maximHealhPerSection;
        }
      }
    }

    if (command == "Status") {
      let counterNeedRepair = 0;
      for (let el of pirateShipStatus) {
        if (el < 0.2 * maximHealhPerSection) {
          counterNeedRepair++;
        }
      }
      console.log(`${counterNeedRepair} sections need repair.`);
    }

    commandLineInfo = inputArr.shift();
  }

  let pirateSum = 0;
  let warShipSum = 0;
  for (let el of pirateShipStatus) {
    pirateSum += Number(el);
  }
  for (let section of warShipStatus) {
    warShipSum += Number(section);
  }

  if (warShipSum > 0 && pirateSum > 0) {
    console.log(`Pirate ship status: ${pirateSum}`);
    console.log(`Warship status: ${warShipSum}`);
  }
}



manOnWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);

console.log(`*******`);

manOnWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
