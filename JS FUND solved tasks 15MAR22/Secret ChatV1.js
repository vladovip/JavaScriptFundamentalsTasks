function secretChar(inputArr) {
  
  let commands = {
    InsertSpace,
    Reverse,
    ChangeAll,
  };

  let text = inputArr.shift();

  while (inputArr[0] != "Reveal") {
    let tokens = inputArr.shift().split(":|:");
    let commandName = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];
    let currentCommand = commands[commandName];
    text = currentCommand(text, p1, p2);
    //   console.log(currentCommand);
  }

  console.log(`You have a new text message: ${text}`);

  function InsertSpace(text, index) {
    let left = text.slice(0, index);
    let right = text.slice(index);
    let result = left + " " + right;
    console.log(result);
    return result;
  }
  // insertSpace ("hellodarling!", 5 );

  function Reverse(text, substr) {
    let index = text.indexOf(substr);

    if (index != -1) {
      let left = text.slice(0, index);
      let right = text.slice(index + substr.length);
      let result = left + right + substr.split("").reverse().join("");
      console.log(result);
      return result;
    } else {
      console.log("error");
      return text;
    }
  }
  // reverse ("IamRIMIDALVfromSofia", "RIMIDALV" );

  function ChangeAll(text, substr, replacement) {
    let result = text.split(substr).join(replacement);
    console.log(result);
    return result;
  }
  // changeAll("hello", "l", "r");
}

secretChar([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
