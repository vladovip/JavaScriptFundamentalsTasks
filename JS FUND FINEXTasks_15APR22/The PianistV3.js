// 100 points in judge system 

function thePianist(inputArr) {
  let numOfPieces = +inputArr.shift();
  let recordsPieceObj = {};
  let counter = 1;
  while (counter <= numOfPieces) {
    let pieceLine = inputArr.shift();
    let tokens = pieceLine.split("|");
    let piece = tokens[0];
    let composer = tokens[1];
    let keyPiece = tokens[2];
    //  console.log(`piece : ${piece} ; composer: ${composer}; key: ${keyPiece}`);
    if (recordsPieceObj.hasOwnProperty(piece) == false) {
      recordsPieceObj[piece] = {
        songComposer: composer,
        pieceDetails: keyPiece,
      };
    } else {
      continue;
    }
    counter++;
  }
  // console.log(recordsPieceObj);

  let commandLine = inputArr.shift();

  while (commandLine !== "Stop") {
    let infoLine = commandLine.split("|");
    let currentCommand = infoLine[0];

    if (currentCommand == "Add") {
      let currentPiece = infoLine[1];
      let currentComposer = infoLine[2];
      let currentKey = infoLine[3];
      if (recordsPieceObj.hasOwnProperty(currentPiece) == false) {
        recordsPieceObj[currentPiece] = {
          songComposer: currentComposer,
          pieceDetails: currentKey,
        };
        console.log(
          `${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`
        );
      } else if (recordsPieceObj.hasOwnProperty(currentPiece) == true) {
        console.log(`${currentPiece} is already in the collection!`);
      }
    }

    if (currentCommand == "Remove") {
      let pieceToRemove = infoLine[1];
      if (recordsPieceObj.hasOwnProperty(pieceToRemove) == true) {
        console.log(`Successfully removed ${pieceToRemove}!`);
        delete recordsPieceObj[pieceToRemove];
      } else {
        console.log(
          `Invalid operation! ${pieceToRemove} does not exist in the collection.`
        );
      }
    }

    if (currentCommand == "ChangeKey") {
      let currentPiece = infoLine[1];
      let newKey = infoLine[2];
      if (recordsPieceObj.hasOwnProperty(currentPiece) == true) {
        recordsPieceObj[currentPiece].pieceDetails = newKey;
        console.log(`Changed the key of ${currentPiece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${currentPiece} does not exist in the collection.`
        );
      }
    }

    commandLine = inputArr.shift();
  }

  for (let element in recordsPieceObj) {
    console.log(
      `${element} -> Composer: ${recordsPieceObj[element].songComposer}, Key: ${recordsPieceObj[element].pieceDetails}`
    );
  }
}



thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

console.log(`*********`);

thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);

console.log(`**********`);

