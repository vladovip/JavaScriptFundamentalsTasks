function easterEggs(inputArr) {

 let textEggs = inputArr.shift();  
 let patternRegex = /([@#]+)(?<eggsColour>[a-z]{3,})([@#]+)[^a-zA-Z0-9]+[\/]+(?<amountEggs>\d+)[\/]+/g;
 let ArrOfAllMathches = textEggs.match(patternRegex);
//  console.log(ArrOfAllMathches);

 let RexExpForEachMatch = /([@#]+)(?<eggsColour>[a-z]{3,})([@#]+)[^a-zA-Z0-9]+[\/]+(?<amountEggs>\d+)[\/]+/m;

    for( let eggsLineTxt of  ArrOfAllMathches ){
    let individualMatch = RexExpForEachMatch.exec(eggsLineTxt);
    let colour = individualMatch.groups['eggsColour'];
    let counterEggs = individualMatch.groups['amountEggs'];
    console.log(`You found ${counterEggs} ${colour} eggs!`);
    }


}


easterEggs([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);


console.log(`--------`);


easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);


 // ([@#]+)(?<eggsColour>[a-z]{3,})([@#]+)[^a-zA-Z0-9]+[\/]+(?<amountEggs>\d+)[\/]+  