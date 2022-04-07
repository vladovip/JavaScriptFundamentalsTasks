function passwordResetProblem(input) {
    //take encoded message
    let message = input.shift();
   
    for (let element of input) {
      //console.log(element); //Cut 15 3
      let tokens = element.split(" ");
      //console.log(tokens); //['Cut', '15', '3']
      let command = tokens[0];
      //console.log(command); //Cut
      if (command === "TakeOdd") {
        str = message.split(""); //splitting by letters to find odd indexes
        oddArr = [];
        for (let i = 0; i < str.length; i++) {
          if (i % 2 != 0) {
            oddArr.push(str[i]);
          }
        }
        message = oddArr.join("");
        console.log(message);
      } else if (command === "Cut") {
        let startIndex = +tokens[1];
        let endIndex = +tokens[2];
        removed = message.split("");
        removed = removed.splice(startIndex, endIndex).join("");
        message = message.replace(removed, "");
        console.log(message);
      } else if (command === "Substitute") {
        let substr = tokens[1];
        let substitude = tokens[2];
        if (message.includes(substr)) {
          message = message.split(substr);
          message = message.join(substitude);
          console.log(message);
        } else {
          console.log("Nothing to replace!");
        }
      } else if (command === "Done") {
        console.log(`Your password is: ${message}`);
        break;
      }
    }
  }
  passwordResetProblem([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",
  ]);