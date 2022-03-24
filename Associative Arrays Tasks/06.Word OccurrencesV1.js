function wordOccurence(inputArr) {
  let result = {};
  let counter = 1;

  for (let word of inputArr) {
      
    let currentWord = word;
    if (result.hasOwnProperty(currentWord)) {
      let repetion = result[currentWord] + counter;
      result[currentWord] = repetion;
    } else {
      result[currentWord] = counter;
    }
  }

  let entries = Object.entries(result);
  let sortedWords = entries.sort((a, b) => b[1] - a[1]);

  for (let element of sortedWords) {
    console.log(`${element[0]} -> ${element[1]} times`);
  }
}


wordOccurence([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);

console.log("----------");

wordOccurence(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
