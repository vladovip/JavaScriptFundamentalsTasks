function counterStrike(inputArr) {
  
  let initialEnergy = Number(inputArr.shift());
  // console.log(initialEnergy);
  let counterForBattlesWin = 0;
  let arrayOfCommands = inputArr;
  let currentCommand = arrayOfCommands.shift();

  while (initialEnergy >= 0 && currentCommand !== "End of battle" && initialEnergy >= currentCommand && currentCommand >=0) {
  
       currentCommand = Number(currentCommand);
       initialEnergy -= currentCommand;
       counterForBattlesWin++;

    if(counterForBattlesWin % 3 == 0  ){
        initialEnergy += counterForBattlesWin
    }
    currentCommand = arrayOfCommands.shift(); 
   
    if (initialEnergy <= 0 || currentCommand =="End of battle"){
      break;
    }
  } 
  
  if (initialEnergy > 0){
    console.log(`Won battles: ${counterForBattlesWin}. Energy left: ${initialEnergy}`);
    }
     
  if (initialEnergy <= 0) {
  console.log(`Not enough energy! Game ends with ${counterForBattlesWin} won battles and ${initialEnergy} energy`);
   }
  
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200","54","14","28","13","End of battle"]);
