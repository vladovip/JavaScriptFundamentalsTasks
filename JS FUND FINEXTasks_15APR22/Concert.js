function concert(inputArr) {
  let AllBands = {};
  let commandLine = inputArr.shift();

  while (commandLine !== "Start!") {
    let tokens = commandLine.split("; ");
    let command = tokens[0];
    // console.log(command);
    // console.log(bandName);
    let bandName = tokens[1];
    let parametars = tokens[2];

    if (command == "Add") {
      let addMembersArr = parametars.split(", ");
      if (AllBands.hasOwnProperty(bandName) == false) {
        AllBands[bandName] = { bandMembers: [], time: 0 };
        for (let member of addMembersArr) {
          AllBands[bandName].bandMembers.push(member);
        }
      } else if (AllBands.hasOwnProperty(bandName) == true) {
        for (let member of addMembersArr) {
          if (AllBands[bandName].bandMembers.includes(member) == false) {
            AllBands[bandName].bandMembers.push(member);
          }
        }
      }
    } else if ( command == "Play" ){
         let playTime = Number(parametars);
         if( AllBands.hasOwnProperty(bandName) == false){
            AllBands[bandName] = { bandMembers: [], time: 0 };
            AllBands[bandName].time += playTime;
        } else if ( AllBands.hasOwnProperty(bandName) == true ){
             AllBands[bandName].time += playTime;
        }
    }
    commandLine = inputArr.shift();
  }

     let sumTime = 0;
     for ( let bandName in AllBands ){
          sumTime += AllBands[bandName].time;
     }
     console.log(`Total time: ${sumTime}`);

     for (let bandName in AllBands) {
      console.log(`${bandName} -> ${AllBands[bandName].time}`);
  }

     let arrOfAllBands = Object.keys(AllBands);
     let firstBand = arrOfAllBands[0];
     console.log(firstBand);
     
     let entriesArrOfAllbands = Object.entries(AllBands);

     let BandFirstPlace = entriesArrOfAllbands[0];
   for ( let element of BandFirstPlace[1].bandMembers){
      console.log(`=> ${element}`);
   }
}

concert([
  "Play; The Beatles; 2584",
  "Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
  "Add; The Beatles; Paul McCartney, George Harrison",
  "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
  "Play; The Rolling Stones; 4239",
  "Start!",
]);

console.log(`------------`);

concert([
  "Add; The Beatles; John Lennon, Paul McCartney",
  "Add; The Beatles; Paul McCartney, George Harrison",
  "Add; The Beatles; George Harrison, Ringo Starr",
  "Play; The Beatles; 3698",
  "Play; The Beatles; 3828",
  "Start!",
]);

console.log(`------------`);

concert([
  "Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
  "Play; The Beatles; 4569",
  "Play; The Beatles; 2456",
  "Play; Queen; 1250",
  "Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon",
  "Play; Queen; 6215",
  "Start!",
]);
