function  warriorQuest (inputArr ){

    let textSkill = inputArr.shift();
    let commandLine = inputArr.shift();

    while ( commandLine != "For Azeroth" ){
        let tokens  = commandLine.split(" ");
        let command = tokens[0];
        // console.log(command);
        
        if( command == "GladiatorStance"){
            textSkill = textSkill.toUpperCase();
            console.log(textSkill);

        }  else if ( command == "DefensiveStance"){ 

            textSkill = textSkill.toLowerCase();
            console.log(textSkill);

        } else if (command == "Dispel"){  // Dispel 2 I

           let indexCommand = Number(tokens[1]);
           let charReplacement = tokens[2];

           if ( indexCommand >= 0 && indexCommand < textSkill.length ){
              let tempArrSkill = textSkill.split("");
              for( let index in  tempArrSkill){
                  if( index == indexCommand ){
                    tempArrSkill[index] = charReplacement;
                  }
              }
               textSkill = tempArrSkill.join("");
               console.log(`Success!`);
           } else  {
                 console.log(`Dispel too weak.`);
           }
           
        } else if (tokens[0] + " " + tokens[1] == "Target Change" ){
             //  Target Change RICTION riction
            let firstString = tokens[2];
            let secondString = tokens[3];

            if (textSkill.includes(firstString) == true) {
                textSkill = textSkill.split(firstString);
                textSkill = textSkill.join(secondString);
                console.log(textSkill);
              } else if (textSkill.includes(firstString) == false) {
                  console.log(textSkill);
              }

        } else if ( tokens[0] + " " + tokens[1] == "Target Remove"){
             // Target Remove NIC
            let subStrText = tokens[2];
            if (textSkill.includes(subStrText) == true){
                textSkill = textSkill.replace(subStrText,"");
               console.log(textSkill);
            } else {
                continue;
            }

        } else {
            console.log(`Command doesn't exist!`);
        }

        commandLine = inputArr.shift();
    }
}

warriorQuest (["fr1c710n",
"GladiatorStance",
"Dispel 2 I",
"Dispel 4 T",
"Target Change RICTION riction",
"For Azeroth"]);

console.log(`--------------`);


warriorQuest (["DYN4MICNIC",
"Target Remove NIC",
"Dispel 3 A",
"DefensiveStance",
"Target Change d D",
"target change D d",
"For Azeroth"]);

console.log(`--------------`);

warriorQuest (["TR1GG3R",
"Dispel 2 I",
"Dispel 5 E",
"For Azeroth"]);

