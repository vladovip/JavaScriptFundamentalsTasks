function arrayManipulator(array, arrayOfCommands) {
 
    for (let command of arrayOfCommands) {
    let tokens = command.split(" ");
    let currentCommand = tokens[0];

    if (currentCommand === "add") {
      let index = Number(tokens[1]);
      let element = Number(tokens[2]);
      array.splice(index, 0, element);
    } else if (currentCommand === "addMany") {
      let index = Number(tokens[1]);
      tokens.splice(0, 2);
      let numbersAdded = tokens.map(Number);
      array.splice(index, 0, ...numbersAdded);
      console.log(array);
    } else if (currentCommand === "contains") {
      let result = array.indexOf(Number(tokens[1]));
      console.log(result);
    } else if (currentCommand === "remove") {
      let index = Number(tokens[1]);
      array.splice(index, 1);
      //console.log(array);
    } else if (currentCommand === "shift") {
      let position = Number(tokens[1]);
      for (let index = 0; index < position; index++) {
        let firstNumber = array.shift();
        array.push(firstNumber);
      }
    } else if (currentCommand === "sumPairs") {
        let resultArray = [];
      if (array.length % 2 !== 0) {
        array.push(0);
      }
      for (let index = 0; index < array.length-1; index +=2) {
        let sum = array[index] + array[index + 1];
         resultArray.push(sum);
      }
      array = resultArray;
    } else if (currentCommand === "print"){
       console.log(`[ ${array.join(", ")} ]`);
    }
  }
}

arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
