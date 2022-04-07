function theImitationGame(array) {
    let message = array.shift().split(``);
   
    while (array[0] !== "Decode") {
        
      let command = array.shift().split("|");
      let currComand = command[0];
   
      if (currComand === "ChangeAll") {
   
        let lettersToChange = command[1];
        let replacement = command[2];
   
        for (let i = 0; i < message.length; i++) {
          if (message[i] === lettersToChange) {
            message[i] = replacement;
          }
        }
      } else if (currComand === "Insert") {
   
        let currIndex = Number(command[1]);
        let value = command[2];
        message.splice(currIndex, 0, value);
      } else if (currComand === "Move") {
   
        let numOfLetters = Number(command[1]);
        let lettersToMove = message.join("");
        let firstPart = lettersToMove.substring(0, numOfLetters);
        let secondPart = lettersToMove.substring(numOfLetters);
        let wholeString = secondPart + firstPart;
        message = wholeString.split("");
      }
    }
   
    console.log(`The decrypted message is: ${message.join(``)}`);
  }
  theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
  theImitationGame([
    "owyouh",
    "Move|2",
    "Move|3",
    "Insert|3|are",
    "Insert|9|?",
    "Decode",
  ]);