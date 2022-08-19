function treasureHunt(inputArr) {
  let treasureChestsStr = inputArr.shift();
  let treasureChestArr = treasureChestsStr.split("|");

  let commandLineInfo = inputArr.shift();
  while (commandLineInfo !== "Yohoho!") {
    let tokens = commandLineInfo.split(" ");
    let [command, ...arrElemens] = tokens;

    if (command == "Loot") {
      // "Loot Wood Gold Coins",
      for (let el of arrElemens) {
        if (treasureChestArr.includes(el) == false) {
          treasureChestArr.unshift(el);
        }
      }
    } else if (command == "Drop") {
      // "Drop 3",
      let indexofItem = Number(arrElemens.shift());
      if (indexofItem >= 0 && indexofItem < treasureChestArr.length) {
        let removedItem = treasureChestArr.splice(indexofItem, 1);
        treasureChestArr.push(removedItem.shift());
      } else if ( indexofItem < 0 ){
       
      }
    } else if (command == "Steal") {
      // "Steal 3",
      // "Steal 6",
      let counterStolenItems = Number(arrElemens.shift());
      if ( counterStolenItems >=1 && counterStolenItems <= 100 ){
        let startIndex = treasureChestArr.length - counterStolenItems;
        let stolenItemsArr = treasureChestArr.splice(startIndex,counterStolenItems);
        console.log(stolenItemsArr.join(", "));
      }
    }

    commandLineInfo = inputArr.shift();
  }

   //   console.log(treasureChestArr);
  // [ 'Pistol', 'Coins', 'Wood', 'Silver', 'Bronze' ]

  if ( treasureChestArr.length <= 0){
    console.log ("Failed treasure hunt.");
  } 

   if ( treasureChestArr.length > 0) {
   let sumofAllTreasure = 0;
   for ( let el of treasureChestArr ){
    sumofAllTreasure += Number(el.length);
   }
   let countOfAllItems = Number(treasureChestArr.length);
   let averageTreasureGain = Number(sumofAllTreasure / countOfAllItems);
   console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`)
  }

}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);

console.log(`*******`);

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
