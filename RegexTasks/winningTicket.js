function winningTicket(inputStr) {
  let inputData = inputStr;
  let inputArr = inputStr.split(",");
  
    for ( let winnerTicket of inputArr){

    let currentTicket =   winnerTicket.trim();  
    let patternWinnerTicket = /[\d\w\s]*(?<leftPart>[@#$^]{6,})[\d\w\s]*(?<rigthPart>\1)/g;
    let matchArr = patternWinnerTicket.exec(currentTicket);

    if ( currentTicket.length != 20){
        console.log(`invalid ticket`);
    } else {

        if (  matchArr === null){
            console.log(`ticket "${currentTicket}" - no match`);
        }

        if ( matchArr !== null  ){
            // console.log(matchArr);
            let leftportion = matchArr.groups.leftPart.toString();
            let rightportion = matchArr.groups.rigthPart.toString();
            
            if ( leftportion.length>=6 && leftportion.length<=9 ){
             console.log(`ticket "${currentTicket.trim()}" - ${leftportion.length}${leftportion.charAt(0)}`);
            } else if (leftportion.length == 10){
            console.log(`ticket "${currentTicket.trim()}" - ${leftportion.length}${leftportion.charAt(0)} Jackpot!`);
            }  
        }
    }

    }

}



winningTicket("Cash$$$$$$Ca$$$$$$sh");
console.log(`********`);
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
console.log(`********`);
winningTicket("validticketnomatch:(");

// (?<leftPart>[@#$^]{6,})[\W\D\w\d]*(?<rigthPart>\1) 

// [\d\w\s]*(?<leftPart>[@#$^]{6,})[\d\w\s]*(?<rigthPart>\1) 



// (?<winSymbolsLeft>[@#$^]+)([\w]+)(?<winSymboslRight>\k<winSymbolsLeft>)



// for (let el of inputArr) {
//     let currentInfoTicket = el;
//     let patternWinTicket = /(?<winSymbolsLeft>[@#$^]+)([\w]+)(?<winSymboslRight>\k<winSymbolsLeft>)/g;
//     let matchArr = patternWinTicket.exec(currentInfoTicket);

//     if (currentInfoTicket.length < 20) {
//       console.log(`invalid ticket`);
//     }

//     if (matchArr != null) {
//       let leftSide = matchArr.groups.winSymbolsLeft;
//       let rightSide = matchArr.groups.winSymboslRight;

//       if (leftSide !== rightSide) {
//         console.log(`ticket "${currentInfoTicket}" - no match`);

//       } else if (leftSide === rightSide) {
//         if (leftSide.length >= 6 && leftSide.length <= 9) {
//           console.log(`ticket "${currentInfoTicket}" - ${leftSide.length}${leftSide.charAt(0)}`);
//         } else if (leftSide.length == 10) {
//           console.log(`ticket "${currentInfoTicket}" - ${leftSide.length}${leftSide.charAt(0)} Jackpot!`);
//         }

//       }

//     }
//   }