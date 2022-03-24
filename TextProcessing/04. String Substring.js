function stringSubstring(searchedWord, strInput) {
  let wordsArr = strInput.split(" ");
  for (let word of wordsArr) {
    if (searchedWord.toLowerCase() === word.toLowerCase()) {
      console.log(searchedWord);
      return;
    }
  }
  console.log(`${searchedWord} not found!`);
}
stringSubstring();
