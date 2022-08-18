function registration(inputArr) {
  let userName = inputArr.shift();
  // console.log(userName);
  let commandLines = inputArr.shift();
  while (commandLines !== "Registration") {
    let tokens = commandLines.split(" ");
    let currentCommand = tokens[0];
    let param1 = tokens[1];
    let param2 = tokens[2];

    if (currentCommand === "Letters") {
      // "Letters {Lower/Upper}"
      if (param1 === "Lower") {
        userName = userName.toLowerCase();
        console.log(userName);
      }
      if (param1 === "Upper") {
        userName = userName.toUpperCase();
        console.log(userName);
      }
    }

    if (currentCommand === "Reverse") {
      //   "Reverse {startIndex} {endIndex}"
      // "Reverse 1 3",
      let startIndex = Number(param1);
      let endIndex = Number(param2);
      if (
        startIndex >= 0 &&
        startIndex < userName.length &&
        endIndex >= 0 &&
        endIndex < userName.length
      ) {
        let tempSubStr = userName.substring(startIndex, endIndex + 1);
        let reversedSubstr = tempSubStr.split("").reverse().join("");
        console.log(reversedSubstr);
      } else {
        continue;
      }
    }

    if (currentCommand === "Substring") {
      // "Substring SA",
      // "Substring {substring}"
      let searchedStr = param1;
      if (userName.includes(searchedStr) == true) {
        userName = userName.split(searchedStr).join("");
        console.log(userName);
      } else {
        console.log(`The username ${userName} doesn't contain ${searchedStr}.`);
      }
    }

    if (currentCommand === "Replace") {
      // 	"Replace {char}"
      //      Replace S
      let char = param1;
      while (userName.includes(char) == true) {
        userName = userName.replace(char, "-");
      }
      console.log(userName);
    }

    if (currentCommand === "IsValid") {
      // "IsValid {char}"
      // IsValid @
      let givenChar = param1;
      if (userName.includes(givenChar) == true) {
        console.log(`Valid username.`);
      } else {
        console.log(`${givenChar} must be contained in your username.`);
      }
    }
   commandLines = inputArr.shift();
  }

}


registration([
  "John",
  "Letters Lower",
  "Substring SA",
  "IsValid @",
  "Registration",
]);

console.log(`****`);

registration([
  "ThisIsSoftUni",
  "Reverse 1 3",
  "Replace S",
  "Substring hi",
  "Registration",
]);
