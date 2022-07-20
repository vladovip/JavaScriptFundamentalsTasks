function activationKey(inputArr) {
  
  let startText = inputArr.shift();
  let currentCommandLine = inputArr.shift();

  while (currentCommandLine !== "Generate") {
    let tokens = currentCommandLine.split(">>>");
    let command = tokens[0];
    let param1 = tokens[1];
    let param2 = tokens[2];
    let param3 = tokens[3];
    // console.log(command, param1, param2, param3);

    if (command == "Contains") {
        // "Contains>>>deF",
      if (startText.includes(param1) == true) {
        console.log(`${startText} contains ${param1}.`);
      } else if (startText.includes(param1) == false){
        console.log(`Substring not found!`);
      }

    } else  if (command === "Flip") {
        let startIndex = Number(param2);
        let endIndex = Number(param3);
        let substrText = startText.slice(startIndex, endIndex);
        let leftPart = startText.slice(0, startIndex );
        let rightPart = startText.slice(endIndex);

      // "Flip>>>Upper>>>3>>>14",
      if ( param1 === "Upper") {
       let upperText = substrText.toUpperCase();
       startText = leftPart+ upperText + rightPart;
       console.log(startText);
      } else if (param1 == "Lower") {
        // "Flip>>>Lower>>>5>>>7",
        let lowerText = substrText.toLowerCase();
        startText = leftPart + lowerText + rightPart;
        console.log(startText);
      }

    } else  if (command = "Slice") {
      // "Slice>>>2>>>6",
       let startIndex = Number(param1);
       let endIndex = Number(param2);
       let removedStr = startText.slice(startIndex, endIndex);
       startText = startText.replace(removedStr,"");
       console.log(startText);
    }

    currentCommandLine = inputArr.shift();
  }
    console.log(`Your activation key is: ${startText}`)
  

}

activationKey([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);

console.log(`**************`);

activationKey([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
