function race ( inputArr) {

    let listOfParticipants = inputArr.shift().split(", ");
    // console.log(listOfParticipants);
    let commandLine = inputArr.shift();

    let resultRacers  = {};

    while ( commandLine != 'end of race') {
         let currentNameRunner ="";
         let eachRunnerkm  = 0;

         let patternName = /[A-Za-z]+/g
         let nameCharMatchArr =  commandLine.match(patternName);
         currentNameRunner = nameCharMatchArr.join('');
        //  console.log(currentNameRunner);
         let patternRunKm = /[\d]/g;
         let kmNumsArr = commandLine.match(patternRunKm);
        //   console.log(kmNumsArr);
         for ( let el of kmNumsArr){
            eachRunnerkm += Number(el);
         }
        //  console.log(eachRunnerkm )
        // console.log(`${currentNameRunner} -> ${eachRunnerkm}`);
         if ( listOfParticipants.includes(currentNameRunner) == true){

            if( resultRacers.hasOwnProperty(currentNameRunner) == false){
                resultRacers[currentNameRunner] = eachRunnerkm;
            } else if (resultRacers.hasOwnProperty(currentNameRunner) == true) {
                    resultRacers[currentNameRunner] += eachRunnerkm;
            }
         }

        commandLine = inputArr.shift();
    }

    let sortedArrOfRunner = Object.entries(resultRacers).sort((a,b) => b[1] - a[1]).slice(0,3);
    // console.log(sortedArrOfRunner);

    console.log(`1st place: ${sortedArrOfRunner[0][0]}` );
    console.log(`2nd place: ${sortedArrOfRunner[1][0]}` );
    console.log(`3rd place: ${sortedArrOfRunner[2][0]}` );
}


race ( ['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
); 
console.log(`*******`);

race (['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
); 

// [A-Za-z]+  

