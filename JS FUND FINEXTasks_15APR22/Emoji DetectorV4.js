function emojiDetector(inputArr) {

  let text = inputArr[0];
  let digitpattern  = /\d+/g;
  let digitmathesArray = text.match(digitpattern);
//    console.log(digitmathesArray);
  let coolDigitArr= [];
//   (7) ['311', '3', '1', '12', '3', '5', '21']
//   (6) ['5', '4', '3', '2', '1', '1']
  for(let i = 0; i< digitmathesArray.length; i++) {
     let currentElementArr = digitmathesArray[i].split("");
     for (let num of currentElementArr){
        coolDigitArr.push(num);
     }
  }
//  (11) ['3', '1', '1', '3', '1', '1', '2', '3', '5', '2', '1']
// (6) ['5', '4', '3', '2', '1', '1']

   let coolThreshold = 1;
   for (let index = 0; index < coolDigitArr.length; index++) {;
    coolThreshold = coolThreshold * Number(coolDigitArr[index]);
   }
//    console.log(coolThreshold);  // -> 540 ; 120 ; 
   
  let emojiPatternTextRegex =  /(:{2}|\*{2})(?<emojiName>[A-Z][a-z]{2,})\1/g;
  let emojiArr = [];
  let coolEmojiArr = [];
  let matchAllEmoji = emojiPatternTextRegex.exec(text);
  while( matchAllEmoji !== null ){
    let currentEmoji = matchAllEmoji.groups.emojiName;
    emojiArr.push(currentEmoji);
// (4) ['Smiley', 'Tigers', 'Mooning', 'Shy']
// (4) ['Joy', 'Banana', 'Wink', 'Vali']
    let sumCharCode = 0;
    for ( let char of currentEmoji ){
        let currentcode = char.charCodeAt();
        sumCharCode += currentcode;
    }
    if( sumCharCode > coolThreshold ){
        coolEmojiArr.push(matchAllEmoji[0]);
    }
    matchAllEmoji = emojiPatternTextRegex.exec(text);
  }
//   console.log(emojiArr): 
// (4) ['Smiley', 'Tigers', 'Mooning', 'Shy']
// (4) ['Joy', 'Banana', 'Wink', 'Vali']
// console.log(coolEmojiArr) : 
// (3) ['Smiley', 'Tigers', 'Mooning']
// (4) ['Joy', 'Banana', 'Wink', 'Vali']

  
console.log(`Cool threshold: ${coolThreshold}`);
console.log(`${emojiArr.length} emojis found in the text. The cool ones are:`);
console.log(`${coolEmojiArr.join("\n ")}`)
    
}




emojiDetector (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

// emojiDetector (`**********`);

emojiDetector (["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);


// (:{2}|\*{2})([A-Z][a-z]{2,})\1  -> emojiPattern
//  (:{2}|\*{2})(?<emojiName>[A-Z][a-z]{2,})\1 