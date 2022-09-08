function solve (input){

    let inputMessage = input;
    let patternText = /(?<chochkoEachMessage>\D{1,20})(?=(?<counter>\d{1,2}))/g;
    let matchArr = patternText.exec(inputMessage);
    let resultOBJ = {};
    while (matchArr != null) {
    
        let currentMatchString = matchArr.groups.chochkoEachMessage;
        let currentCounter = Number(matchArr.groups.counter);
        if ( currentCounter <= 20 && currentCounter >= 0) {
               if ( currentMatchString != ''){
                resultOBJ[currentMatchString] = currentCounter;
                matchArr = patternText.exec(inputMessage);
               }
        } else {
            break;
        }
    }
    
    let finalmessage = '';
      for (let  key in resultOBJ ) {
        finalmessage += key.repeat(resultOBJ[key]);
    }
    finalmessage = finalmessage.toUpperCase();

    let uniqueCount = new Set(finalmessage).size;
    console.log(`Unique symbols used: ${uniqueCount}`);
    console.log(finalmessage);
    
    // AAA
    // ASDASD&&&&&S@

} 


solve ("a3"); 
console.log(`*************`);
solve("aSd2&5s@1");
console.log(`*************`);



// (?<chochkoEachMessage>\D{1,20})(?=(?<counter>\d{1,2}))
// (?<chochkoEachMessage>\D{1,20})(?=(?<counter>\d{0,20})) 
 