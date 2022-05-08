function decryptingCommands(inputArr) {
  let text = inputArr.shift();
  let commandline = inputArr.shift();

  while (commandline != "Finish") {
    let tokens = commandline.split(" ");
    let command = tokens[0];

    if (command == "Replace") {
      let currentChar = tokens[1];
      let replacementChar = tokens[2];
      textArr = text.split("");
      for (let index = 0; index < textArr.length; index++) {
        if (currentChar == textArr[index]) {
          textArr[index] = replacementChar;
        }
      }
      text = textArr.join("");
      console.log(text);
    }
    if (command == "Cut") {
      let startIndex = Number(tokens[1]); // StarIndex 1; EndIndex 4;  text ->  WELIKESOFTUNI
      let endIndex = Number(tokens[2]); 

      if (startIndex >= 0 && startIndex < text.length &&  endIndex >= 0 &&  endIndex < text.length) {
        let leftPart = text.slice(0, startIndex+1);
        let rightPart = text.slice(endIndex+2, text.length);
        text = leftPart + rightPart;
        console.log(text);
      } else {
        console.log(`Invalid indices!`);
      }
    }

    if (tokens[0] + " " + tokens[1] == "Make Upper") {
      text = text.toUpperCase();
      console.log(text);
    }
    if (tokens[0] + " " + tokens[1] == "Make Lower") {
      text = text.toLowerCase();
      console.log(text);
    }

    if (command == "Check") {
      let subStrTxt = tokens[1];
      if (text.includes(subStrTxt) == true) {
        console.log(`Message contains ${subStrTxt}`);
      } else {
        console.log(`Message doesn't contain ${subStrTxt}`);
      }
    }

    if (command == "Sum") {
      let startIndex = Number(tokens[1]);
      let endIndex = Number(tokens[2]);
      
      if ( startIndex >= 0 && startIndex < text.length &&  endIndex >= 0 &&  endIndex < text.length ) {
        let subStrText = text.substring(startIndex, endIndex + 1);
        let tempArrsubStrText = subStrText.split("");
        let sumASCIIChar = 0;
        for (let charOfSubstr of tempArrsubStrText) {
          sumASCIIChar += charOfSubstr.charCodeAt();
        }
        console.log(sumASCIIChar);
      } else {
        console.log(`Invalid indices!`);
      }
    }

    commandline = inputArr.shift();
  }
}

decryptingCommands([
  "ILikeSoftUni",
  "Replace I We",
  "Make Upper",
  "Check SoftUni",
  "Sum 1 4",
  "Cut 1 4",
  "Finish",
]);


console.log(`----------`);

decryptingCommands([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish", ]);
