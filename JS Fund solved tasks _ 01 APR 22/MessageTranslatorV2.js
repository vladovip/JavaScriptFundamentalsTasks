
function messageTranslation ( input ){

    
let counter = Number(input.shift());

let patternRegExp = /\!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[a-zA-Z]{8,})\]/g

for (let index = 0; index < counter; index++) {
    let currentText = input[index];

    let isValidCommandLine = patternRegExp.test(currentText);
   
    if ( isValidCommandLine == true ){
    
        let matchesArr = currentText.match(patternRegExp);
        // console.log(matchesArr[0]);
         let patternSplit = /[!:\[\]]/g
         let resultArr = matchesArr[0].split(patternSplit);
        //  console.log(resultArr);
         let command = resultArr[1];
         let stringText = resultArr[4];
         let translatedSequenceArr = [];

         for ( let char of stringText ){
            let numASCII = char.charCodeAt();
            if ( numASCII == 32 ){
                continue;
            } else {
                translatedSequenceArr.push(numASCII);
            }
         } 

         console.log(`${command}: ${translatedSequenceArr.join(" ")}`);
        

    } else if ( isValidCommandLine == false){
        console.log(`The message is invalid`);
    }
    
    
}



}

messageTranslation([
    "2", 
    "!Send!:[IvanisHere]", 
    "*Time@:[Itis5amAlready"
    ]);
    
    console.log(`---------`);
    
    messageTranslation([
      "3",
      "go:[outside]",
      "!drive!:YourCarToACarWash",
      "!Watch!:[LordofTheRings]",
    ]);
    