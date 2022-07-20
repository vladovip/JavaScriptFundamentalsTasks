function worldTour(inputArr) {

  let text = inputArr.shift();
  let commandLine = inputArr.shift();

  while (commandLine != "Travel") {
    let tokens = commandLine.split(":");
    let currentCommand = tokens[0];
    //  console.log(currentCommand);

    if (currentCommand == "Add Stop") {
      let index = +tokens[1];
      let stringText = tokens[2];
      // console.log(index , stringText  );

      if (index <= text.length && index >= 0) {
        //  text -> "Hawai::Cyprys-Greece",
        let leftpart = text.slice(0, index);
        let rightpart = text.slice(index, text.length);
        text = leftpart + stringText + rightpart;
        console.log(text);
      }
    } else if (currentCommand == "Remove Stop") {
      
      let startIndex = +tokens[1];
      let endIndex = +tokens[2];
      if (
        (startIndex >= 0 &&
        startIndex < text.length) &&
        (endIndex >= 0 &&
        endIndex< text.length) && ( startIndex <= endIndex) 
      ) {
        let leftPart = text.slice(0, startIndex);
        let removePart = text.slice(startIndex, endIndex + 1);
        let rightPart = text.slice(endIndex + 1, text.length);
        text = leftPart + rightPart;
        console.log(text);
      }
    } else if (currentCommand == "Switch") {

      let oldString = tokens[1];
      let newString = tokens[2];
      if( oldString != newString){
        while (text.includes(oldString) == true) {
          text = text.replace(oldString, newString);
        }
      }
      console.log(text);
    }


    commandLine = inputArr.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${text}`);
}


worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
