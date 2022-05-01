function mirrorWords(input) {
  let text = input.shift();

  let pattern = /(@|#)([A-zaz]{3,})\1{2}([A-zaz]{3,})\1/g;

  let match = pattern.exec(text);
  let result = [];
  let counter = 0;

  while (match != null) {

    counter++;
    let word1 = match[2];
    let word2 = match[3];
    let reversedWord = word2.split("").reverse().join("");

    if (word1 == reversedWord) {
      result.push(`${word1} <=> ${word2}`);
    }

    match = pattern.exec(text);
  }
     if ( counter == 0 ){
       console.log(`No word pairs found!`);
     } else {
       console.log(`${counter} word pairs found!`);
     }

   if ( result.length == 0){
      console.log(`No mirror words!`);
   } else {
     console.log(`The mirror words are:`);
     console.log(result.join(", "));
   }
  
}


mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);

// (@|#)([A-zaz]{3,})\1{2}([A-zaz]{3,})\1
// (@|#)([A-zaz]{3,})(\1){2}([A-zaz]{3,})(\1)
