function plantDiscovey(inputArr) {
  let numberInputs = +inputArr.shift();
  let counter = 0;
  let recordsPlantsObj = {};
  

  while (counter < numberInputs) {
    let plantInfoLine = inputArr.shift();
    //    console.log(plantInfoLine);
    let tokens = plantInfoLine.split("<->");
    let plantName = tokens[0];
    let plantRarity = +tokens[1];

    if (recordsPlantsObj.hasOwnProperty(plantName) == false) {
      recordsPlantsObj[plantName] = { rarity: plantRarity, rating: 0, counterRating : 0};
    } else if (recordsPlantsObj.hasOwnProperty(plantName) == true) {
      recordsPlantsObj[plantName].rarity += plantRarity;
    }

    counter++;
  }
  
  let commandInputLine = inputArr.shift();
  
  while (commandInputLine != "Exhibition") {

    let tokens = commandInputLine.split(": ");
    let command = tokens[0];
    //  console.log(command);

    if (command == "Rate") {
      let infoLine = tokens[1].split(" - ");
      let currentPlant = infoLine[0];
      let currentRating = +infoLine[1];
      if (recordsPlantsObj.hasOwnProperty(currentPlant) == true) {
          recordsPlantsObj[currentPlant].rating += currentRating; 
          recordsPlantsObj[currentPlant].counterRating+=1; 
        } else if (recordsPlantsObj.hasOwnProperty(currentPlant) == false) {
          console.log("error");
        }
    }

    if (command == "Update") {
      let plantLine = tokens[1].split(" - ");
      let plant = plantLine[0];
      let newRarity = +plantLine[1];
      if (recordsPlantsObj.hasOwnProperty(plant) == false) {
        console.log("error");
      } else if (recordsPlantsObj.hasOwnProperty(plant) == true){
           recordsPlantsObj[plant].rarity = newRarity;
      } 
    }

    if (command == "Reset") {
      let currentPlantName = tokens[1];
      if (recordsPlantsObj.hasOwnProperty(currentPlantName) == true) {
        recordsPlantsObj[currentPlantName].rating = 0;
      } else {
        console.log("error");
      } 
    }

    commandInputLine = inputArr.shift();
  }

 

console.log(`Plants for the exhibition:`);
for (let keys in recordsPlantsObj) {
  if (recordsPlantsObj[keys].counterRating >= 1 ){
    console.log(
      `- ${keys}; Rarity: ${recordsPlantsObj[keys].rarity}; Rating: ${((recordsPlantsObj[keys].rating)/recordsPlantsObj[keys].counterRating).toFixed(2)}`
    );
  } else {
    console.log(
      `- ${keys}; Rarity: ${recordsPlantsObj[keys].rarity}; Rating: ${(recordsPlantsObj[keys].rating).toFixed(2)}`
    );
  }
  
}

}


plantDiscovey([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);


console.log(`********`);


plantDiscovey([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
