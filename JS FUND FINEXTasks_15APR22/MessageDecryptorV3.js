function messageDecryption (inputArr){

    let counter = Number(inputArr.shift());
    let startCounter = 0;
    let patternRegExp = /^(\$|\%)(?<tagText>[A-Z][a-z]{2,})\1\:\s\[(?<firstGr>\d+)\]\|\[(?<secondGr>\d+)\]\|\[(?<thirdGr>\d+)\]\|$/;
    let currentTextLine = inputArr.shift();

    while ( startCounter < counter  ){
    //  console.log(textLine);
    let allMathes = patternRegExp.exec(currentTextLine);

    if ( allMathes !== null){
      
        let tag = allMathes.groups['tagText'];
        let firstSeq = allMathes.groups['firstGr'];
        let secondSeq = allMathes.groups['secondGr'];
        let thirdSeq = allMathes.groups['thirdGr'];
        let resultMessage = String.fromCharCode(firstSeq)+String.fromCharCode(secondSeq)+String.fromCharCode(thirdSeq); 
        console.log(`${tag}: ${resultMessage}`);

    } else  {
        console.log(`Valid message not found!`);
    }


    currentTextLine = inputArr.shift();
    startCounter++;
    }


}

messageDecryption (["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"]);


console.log(`-----------`);


messageDecryption (["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"]);


// (\$|\%)(?<tagText>[A-Z][a-z]{2,})\1\:\s\[(?<firstGr>\d+)\]\|\[(?<secondGr>\d+)\]\|\[(?<thirdGr>\d+)\]\|    -first option;

// (\$|\%)(?<tagText>[A-Z][a-z]{2,})\1\:\s\[(?<firstGr>\d+)\]\|\[(?<secondGr>\d+)\]\|\[(?<thirdGr>\d+)\]\|    -second option;

// ^(\$|\%)(?<tagText>[A-Z][a-z]{2,})\1\:\s\[(?<firstGr>\d+)\]\|\[(?<secondGr>\d+)\]\|\[(?<thirdGr>\d+)\]\|$  -final option;