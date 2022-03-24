function hardWords(input) {
  let stringSentence = input[0];
  let stringSentenceArr = input[0].split(" ");
  //   console.log(stringSentenceArr);
  let SpecialWordsArr = input[1];
  //  console.log(SpecialWordsArr);

  for (let index = 0; index < stringSentenceArr.length; index++) {
    let word = stringSentenceArr[index];
    //   console.log(word);
    for (let specialWord of SpecialWordsArr) {
        if( word.endsWith(".") || word.endsWith("?") || word.endsWith(",") || word.endsWith("!") ){
           if ( word.slice(0,-1) == "_".repeat(specialWord.length)){
               word = word.replace("_".repeat(specialWord.length), specialWord)
           }
        } else if ( word === "_".repeat(specialWord.length)){
            word = specialWord;
        }
    }
    stringSentenceArr[index] = word; 
  }
  console.log(stringSentenceArr.join(' '));
}

hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);

// // replace(search, replacement)
// replace(search, replacement)
// console.log(text.includes("fruits"));
