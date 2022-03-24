function modernTimes(sentence) {
  
  let wordsArr = sentence.split(" ");
  for (let word of wordsArr) {
    if (word.startsWith("#") && word.length > 1) {
       asciCode = word.charCodeAt(1);
       let isLetter = (asciCode >= 65 && asciCode<= 90) || (asciCode>= 97 && asciCode <= 122);
       if(isLetter){
           console.log(word.substring(1));
       }

    }
  }
}

modernTimes();
