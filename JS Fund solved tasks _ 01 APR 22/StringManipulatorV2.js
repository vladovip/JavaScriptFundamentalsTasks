function stringManipulator(inputArr) {

let text = inputArr.shift();
let commandLine = inputArr.shift();

while ( commandLine != "End"){
    let tokens = commandLine.split(" ");
    // console.log(tokens);
    let command = tokens[0];
    // console.log(command);

    if( command == "Translate" ){
      
      let currentChar = tokens[1];
      let replacementChar = tokens[2];
      // console.log(currentChar,replacementChar);
      tempArr = text.split("");
      for (let index = 0; index < tempArr.length; index++) {
        if(currentChar ==  tempArr[index]){
          tempArr[index] = replacementChar;
        }
      }
      text = tempArr.join("");
      console.log(text);

    } else if( command === "Includes" ){
      let substringIncluded = tokens[1];
      let isIncluded = text.includes(substringIncluded);
      console.log(isIncluded);
    
    } else if( command ==="Start" ){
      let substringIncluded = tokens[1];
      let isStartWithSubstring = text.startsWith(substringIncluded);
      console.log(isStartWithSubstring);

    } else if(  command === "Lowercase" ){
     text = text.toLowerCase();
     console.log(text);
              
    } else if(  command === "FindIndex" ){
      let currentChar = tokens[1];
      let finalIndex = text.lastIndexOf(currentChar);
      console.log(finalIndex);

    }else if(  command === "Remove" ){
       let startIndex = Number(tokens[1]);
       let counter = Number(tokens[2]);
       let leftpart = text.slice(0, startIndex)
       let rightpart = text.slice(startIndex+counter)
       text = leftpart+rightpart;
       console.log(text);
    }

    commandLine = inputArr.shift();
}


}

stringManipulator([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);

console.log(`----------`);

stringManipulator([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);

console.log(`----------`);



