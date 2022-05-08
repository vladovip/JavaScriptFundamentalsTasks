
function hogWarts (inputArr){

    let textSpell = inputArr.shift();
    let commandLine = inputArr.shift();

    while ( commandLine != "Abracadabra" ){
        let tokens  = commandLine.split(" ");
        let command = tokens[0];
        // console.log(command);
        
        if( command == "Abjuration"){
          textSpell = textSpell.toUpperCase();
          console.log(textSpell);

        }  else if ( command == "Necromancy"){ 

            textSpell = textSpell.toLowerCase();
            console.log(textSpell);

        } else if (command == "Illusion"){
           let indexCommand = Number(tokens[1]);
           let charReplacement = tokens[2];
           if( indexCommand >= 0 && indexCommand < textSpell.length  ){
              let tempArrSpell = textSpell.split("");
              for( let index in  tempArrSpell){
                  if( index == indexCommand ){
                    tempArrSpell[index] = charReplacement;
                  }
              }
               textSpell = tempArrSpell.join("");
               console.log(`Done!`);
           } else {
                 console.log(`The spell was too weak.`);
           }
           
        } else if ( command ==  "Divination"){

            let firstString = tokens[1];
            let secondString = tokens[2];
            if (textSpell.includes(firstString) == true) {
                textSpell = textSpell.split(firstString);
                textSpell = textSpell.join(secondString);
                console.log(textSpell);
              } else if (textSpell.includes(firstString) == false) {
                  continue;
              }

        } else if ( command == "Alteration"){
           
            let subStrText = tokens[1];
            if (textSpell.includes(subStrText) == true){
               textSpell = textSpell.replace(subStrText,"");
               console.log(textSpell);
            } else {
                continue;
            }

        } else {
            console.log(`The spell did not work!`);
        }

        commandLine = inputArr.shift();
    }
 
}

hogWarts (["A7ci0",
"Illusion 1 c",
"Illusion 4 o",
"Abjuration",
"Abracadabra"]); 

console.log(`-----------`);


hogWarts (["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"]);

console.log(`-------`);

hogWarts(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"]);

