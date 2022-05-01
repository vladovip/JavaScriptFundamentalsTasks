function imitationGame(input) {
  let encryptedText = input.shift();
  // console.log(encryptedText);
  let currentLine = input.shift();
  while (currentLine != "Decode") {
    let tempMessage = "";
    let tokens = currentLine.split("|");
    let command = tokens[0];

    if (command == "Move") {
      let lettersNumber = Number(tokens[1]);
      let lettersToMove = encryptedText.substring(0, lettersNumber);
      tempMessage = encryptedText.replace(lettersToMove, "");
      tempMessage += lettersToMove;
      encryptedText = tempMessage;
      // console.log(encryptedText);

    } else if (command == "Insert") {
      let index = Number(tokens[1]);
      let value = tokens[2];
      tempMessage = encryptedText.split("");
      tempMessage.splice(index, 0, value);
      encryptedText = tempMessage.join("");

    } else if (command == "ChangeAll") {
      let substring = tokens[1];
      let replacement = tokens[2];
      //   string.replace(searchValue, newValue)
      while (encryptedText.includes(substring)) {
        tempMessage = encryptedText.replace(substring, replacement);
        encryptedText = tempMessage;
      }
    //   encryptedText = tempMessage;
    }
    currentLine = input.shift();
  }

  console.log(`The decrypted message is: ${encryptedText}`);
}


imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

console.log(`--------------`);

imitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
