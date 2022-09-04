function starEnigma(inputArr) {
    
  let numberMessg = inputArr.shift();
  let currentDecryptKey = 0;
  let resultArr = [];
  for (let i = 0; i < numberMessg; i++) {
    let pattern = /[starSTAR]/g;
    let matchArr = inputArr[i].match(pattern);
    // console.log(matchArr)
   if (matchArr != null) {
      let decryptedMessage = '';
      currentDecryptKey = matchArr.length;
    //   console.log(currentDecryptKey);
      let tempArrMessage = inputArr[i].split("");
    //   console.log(tempArrMessage);
      for (let el of tempArrMessage) {
        let newCharCode = el.charCodeAt() - currentDecryptKey;
        let newSymbol = String.fromCharCode(newCharCode);
        decryptedMessage += newSymbol;
      }
      resultArr.push(decryptedMessage); 
    }
  }

  //   console.log(resultArr);
  // [ 'PQ@Alderaa1:30000!A!->20000', '@Cantonica:3000!D!->4000NM' ]
  
  let attackedPlanetCounter = 0;
  let attackePlanetArr = [];
  let destroyedPlanetCounter = 0;
  let destroyedPlanetArr = [];
  for ( let el  of resultArr){

    let planetInfo = el;
    let patternPlanet = /@(?<planetName>[A-Za-z]+)[^@\-!:and]*:(?<planetPopulation>\d+)[^@\-!:and]*!(?<attackType>[AD])![^@\-!:and]*->(?<soldierCount>\d+)/g;
    let matchCollection = patternPlanet.exec(planetInfo);

    if ( matchCollection != null  ){
        let currentPlanet = matchCollection.groups.planetName;
        let population = Number(matchCollection.groups.planetPopulation);
        let typeAttack = matchCollection.groups.attackType;
        let soldierNums = Number(matchCollection.groups.soldierCount);
        // console.log(currentPlanet,population,typeAttack,soldierNums);
        // Alderaa 30000 A 20000
        // Cantonica 3000 D 4000
        //Coruscant 2000000000 D 5000
        
        if ( typeAttack == "A" ){
            attackedPlanetCounter++;
            attackePlanetArr.push(currentPlanet);
        } else if (typeAttack == "D"){
            destroyedPlanetCounter++;
            destroyedPlanetArr.push(currentPlanet);
        }
    }
  }
     let sortedAttackedPlanets = attackePlanetArr.sort();
     let sortedDestroyedPlanets = destroyedPlanetArr.sort();

     console.log(`Attacked planets: ${attackedPlanetCounter}`);
     sortedAttackedPlanets.forEach(x => console.log(`-> ${x}`));
     console.log(`Destroyed planets: ${destroyedPlanetCounter}`);
     sortedDestroyedPlanets.forEach(x => console.log(`-> ${x}`));

  
}


starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);

console.log(`*******`);

starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);



// @(?<planetName>[A-Za-z]+)[^@\-!:and]*:(?<planetPopulation>\d+)[^@\-!:and]*!(?<attackType>[AD])![^@\-!:and]*->(?<soldierCount>\d+)