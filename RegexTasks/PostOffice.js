function postOffice (input) {


let [firstPart, secondPart, thirdPart] = input.split('|');
//  1 PART: 
let patternCapitalLetters  = /([#$%*&]+)(?<capitalLetters>[A-Z]+)\1/g;
let matchArr  =   patternCapitalLetters.exec(firstPart);
let capitalLettersArr = [];
while (  matchArr != null ){
    let currentMatch = matchArr.groups.capitalLetters;
    capitalLettersArr.push(currentMatch);
    matchArr  =   patternCapitalLetters.exec(firstPart);
}

capitalLettersArr = capitalLettersArr[0].split('');
// console.log(capitalLettersArr);
// [ 'A', 'O', 'T', 'P' ]
// [ 'P', 'O', 'A', 'M', 'L' ]

//  2 PART:  wordLengthOBJCollection 
let patternWordLength = /(?<ASCIICode>\d{1,3}):(?<wordLength>\d{2})/g;
let matchArrSecondpart = patternWordLength.exec(secondPart);
let tempObjWordLength = {};
while (matchArrSecondpart != null)  {
   let tempASCIICode = Number(matchArrSecondpart.groups.ASCIICode);
   let wordLength = Number(matchArrSecondpart.groups.wordLength);
   tempObjWordLength[tempASCIICode] = wordLength;
   matchArrSecondpart = patternWordLength.exec(secondPart);
}
//  for( let key in tempObjWordLength){
//     console.log(`${key} : ${tempObjWordLength[key]}`);
//  }   -> 65 : 3 , 79 : 1 ,   80 : 7  ,  84 : 2


let keysASCIICodes = Object.keys(tempObjWordLength);
let CapitalLetterWordLengthOBJ = {};  
for ( let capitalLetter of capitalLettersArr ){
      for ( let code of keysASCIICodes ){
       if ( capitalLetter.charCodeAt() == Number(code )){
        CapitalLetterWordLengthOBJ[capitalLetter] = tempObjWordLength[code] + 1 ;
       }
      }
}
 // CapitalLetterWordLengthOBJ  =>  key: eachWordStartCapitalLetter , value: eachWordLength
//  A : 4 , O : 2 ,  T : 3 ,  P : 8
//  P : 4 ,  O : 6 , A : 12 , M : 6,  L : 6


// 3 PART: make a collection of all matches in terms of Capital Letter and WordLength.
let patternThirdPart = /(?<=[\s|])[A-Z][a-z0-9-A-Z]+/g;
let matchArrThirdPart = thirdPart.match(patternThirdPart);
let resultArrTotal = [];
let keysCapitalLetters = Object.keys(CapitalLetterWordLengthOBJ);
for  ( let el of  matchArrThirdPart) {
     let firstletter = el.split('')[0];
     if ( keysCapitalLetters.includes(firstletter) && CapitalLetterWordLengthOBJ[firstletter] == el.length ){
        resultArrTotal.push(el);
     }
}

console.log(resultArrTotal.join("\n"));

}



postOffice ("sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos");

console.log(`******************************`);

postOffice ("Urgent\"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig");




// ([#$%*&]+)(?<capitalLetters>[A-Z]+)\1 - capital Letters 

// \d{1,3}:\d{2}   - word length; 
// (?<ASCIICode>\d{1,3}):(?<wordLength>\d{2})   - word length;  
// [A-Z][a-z]+/g;    third part V1
// (?<=[\s|])[A-Z][a-z0-9-A-Z]+   third part  V2