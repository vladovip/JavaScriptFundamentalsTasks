function ImitationGame( inputArr) {

    let message = inputArr.shift();
    let commandLine = inputArr.shift();

    while ( commandLine != "Decode"   ){
        let tokens = commandLine.split("|");
        let command = tokens[0];
        // console.log(command);
        if (command == "Move"){
            let numberLetters = +tokens[1];
            let slicedStr = message.slice(0, numberLetters);
            message = message.replace(slicedStr,"");
            message = message+slicedStr;
            // console.log(message);  // ezzH 
        }

        if ( command == "Insert"){  // zzHe
            let index = +tokens[1];
            let value = tokens[2];
            let leftpart = message.slice(0, index); 
            let rightpart = message.slice(index, message.length);
            message = leftpart+value+rightpart;
        }
        if ( command == "ChangeAll" ){
 
            let subStr = tokens[1];
            let replacement = tokens[2];
            // console.log(subStr, replacement );
            let arrMessage = message.split("");
            // console.log(arrMessage);
           for (let index = 0; index < arrMessage.length; index++) {
               if ( subStr == arrMessage[index]  ){
                arrMessage[index]=replacement
               }
           }
             message = arrMessage.join("");
            // console.log(message);    
        }

        commandLine = inputArr.shift();   
    }

    console.log(`The decrypted message is: ${message}`);

}

ImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

console.log(`-------------`);

ImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
