function activationKey(arr) {
  let raw = arr.shift(0);

  let commands = {
    Contains,
    Flip,
    Slice,
  };

  while (arr[0] !== "Generate") {
    let token = arr.shift(0).split(">>>");
    let [p1, p2, p3, p4] = token;

    let command = commands[p1];
    let text = command(p2, p3, p4);
  }
  console.log(`Your activation key is: ${raw}`);

  function Contains(substring) {
    if (raw.includes(substring)) {
      console.log(`${raw} contains ${substring}`);
    } else {
      console.log(`Substring not found!`);
    }
  }

  function Flip(caseUorL, startIndex, endIndex) {
    let substring = raw.substring(startIndex, endIndex);
    let toUpper;
    let toLower;
    if (caseUorL === "Upper") {
      toUpper = substring.toUpperCase();
      console.log((raw = raw.replace(substring, toUpper)));
    } else {
      toLower = substring.toLowerCase();
      console.log((raw = raw.replace(substring, toLower)));
    }
  }

  function Slice(startIndex, endIndex) {
    let deleteWord = raw.substring(startIndex, endIndex);
    console.log((raw = raw.replace(deleteWord, "")));
  }
}
