function solve(text) {
  
  let pascalWords = [];
  let currWord = text[0];
  for (let index = 1; index < text.length; index++) {
    if (text[index].toUpperCase() !== text[index]) {
      currWord = currWord.concat(text[index]);
    } else {
      pascalWords.push(currWord);
      currWord = text[index];
    }
  }
  pascalWords.push(currWord);
  console.log(pascalWords.join(", "));
}
solve();
