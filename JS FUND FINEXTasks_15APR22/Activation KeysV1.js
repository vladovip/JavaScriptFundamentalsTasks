function activationKeysProblem(input) {
    //take encoded message
    let message = input.shift();
   
    for (let element of input) {
      let tokens = element.split(">>>");
      //console.log(tokens); //['Slice', '2', '6']...
      let command = tokens[0];
      //console.log(command); //Slice
      if (command === "Contains") {
          let substr = tokens[1];
          if(message.includes(substr)) {
              console.log(`${message} contains ${substr}`);
          }else{
              console.log("Substring not found!");
          }
      } else if (command === "Flip") {
        let instruction = tokens[1];
        let startIndex = +tokens[2];
        let endIndex = +tokens[3];
        if (instruction === "Upper") {
          removed = message.slice(startIndex, endIndex);
          final = removed.toUpperCase();
          message = message.replace(removed, final);
          console.log(message);
        } else if (instruction === "Lower") {
          removed = message.slice(startIndex, endIndex);
          final = removed.toLowerCase();
          message = message.replace(removed, final);
          console.log(message);
        }
      } else if (command === "Slice") {
        let startIndex = +tokens[1];
        let endIndex = +tokens[2];
        removed = message.slice(startIndex, endIndex);
        message = message.replace(removed, "");
        console.log(message);
      } else if (command === "Generate") {
          console.log(`Your activation key is: ${message}`);
          break;
      }
    }
  }
  activationKeysProblem([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
  ]);
   