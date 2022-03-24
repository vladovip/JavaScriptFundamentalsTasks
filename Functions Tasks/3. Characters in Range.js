function characterInrange(char1, char2) {
 
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  //   console.log(startChar);
  let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
  //   console.log(endChar);

  let charsRangeArray = [];

  for (let index = startChar + 1; index < endChar; index++) {
    charsRangeArray.push(String.fromCharCode(index));
  }

  console.log(charsRangeArray.join(" "));
}
characterInrange("a", "d");
