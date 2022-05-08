function dictionary(inputArr) {
  let wordDefinitionLine = inputArr.shift().split(" | ");
  // console.log(wordDefinitionLine);
  let wordLineArr = inputArr.shift().split(" | ");
  // console.log(wordLineArr);
  let command = inputArr.shift();
  // console.log(command);
  let libraryRecords = {};

  for (let element of wordDefinitionLine) {
    let tokens = element.split(": ");
    let word = tokens[0];
    let explanation = tokens[1];
    if (libraryRecords.hasOwnProperty(word) == false) {
      libraryRecords[word] = [];
      libraryRecords[word].push(`${explanation}`);
    } else if (libraryRecords.hasOwnProperty(word) == true) {
      if (libraryRecords[word].includes(explanation) == false) {
        libraryRecords[word].push(`${explanation}`);
      }
    }
  }

  // for( let word in libraryRecords){
  //     console.log(`${word} : ${libraryRecords[word]}`);
  // }

  if (command == "Test") {
    for (let testedWord of wordLineArr) {
      if (libraryRecords.hasOwnProperty(testedWord) == true) {
        console.log(`${testedWord}:`);
        // console.log(libraryRecords[testedWord]);
        for( let element of libraryRecords[testedWord] ){
            console.log(`-${element}`);
        }
      }
    }
  }

  if ( command == "Hand Over"){
      let arrOfWords = Object.keys(libraryRecords);
      console.log(arrOfWords.join(" "));
  }


}

dictionary([
  "programmer: an animal, which turns coffee into code | developer: a magician",
  "fish | domino",
  "Hand Over",
]);

console.log(`-------`);

dictionary([
  "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
  "care | kitchen | flower",
  "Test",
]);

console.log(`---------`);

dictionary([
  "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
  "bit | code | tackle",
  "Test",
]);
