function letterChangesNumber (inputStr) {
    
let wordsArr = inputStr.split(" ").filter( x => x!== "" );
//  console.log(wordsArr);
let totalSum = 0;
let isUpperCase = (letter) => letter.toUpperCase() === letter;
let getAlphaBetPosition =  (letter) => letter.charCodeAt(0) - 96;

wordsArr.forEach((word) => {
     let letterBefore = word[0];
     let letterAfter = word[word.length -1];
    //  console.log(letterBefore);
    // console.log(letterAfter);
     let number = Number(word.substring(1, word.length-1));
    //  console.log(number);
    let letterBeforePosition = getAlphaBetPosition(letterBefore.toLowerCase());
    let letterAfterPosition = getAlphaBetPosition(letterAfter.toLowerCase());
    if ( isUpperCase (letterBefore)){
         number /= letterBeforePosition;
    } else {
        number*= letterBeforePosition;
    }

    if (isUpperCase(letterAfter)) {
         number -= letterAfterPosition;
    } else{
         number += letterAfterPosition;
    } 
    totalSum += number;    
});
  console.log(totalSum.toFixed(2));
}


letterChangesNumber ("A12b s17G");

console.log(`**********`);

letterChangesNumber ("P34562Z q2576f H456z");