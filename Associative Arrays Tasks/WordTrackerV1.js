function wordTracker(inputArr) {
  let firstElement = inputArr.shift().split(" ");
  // console.log(firstElement);
  let result = {};

  for (let word of firstElement) {
    result[word] = 0;
  }
  //    console.log(result);
  for (let word of inputArr) {
    if (result.hasOwnProperty(word)) {
      result[word] += 1;
    }
  }
  //console.log(result);
  let sortedArr = Object.entries(result);
  sortedArr.sort((a, b) => b[1] - a[1]);

  for (let word of sortedArr) {
    console.log(word[0], "-", word[1]);
  }
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

console.log(`-------`);


wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
