function valueOfString (input){

    let sumUpperCase = 0;
    let sumLowerCase = 0;
    let totalSum = 0;
    let inputString = input.shift();
    let commandLine = input.shift();
   
    for (let index = 0; index < inputString.length; index++) {
         let currentChar = inputString[index];
         
        if(commandLine == "UPPERCASE" &&  currentChar.toUpperCase() == inputString[index]){
            let currentUnicode = inputString.charCodeAt(index);
            if( currentUnicode >= 65 && currentUnicode <= 90 ){
                sumUpperCase += currentUnicode;
            }      
        } else if(commandLine == "LOWERCASE" && currentChar.toUpperCase() !== inputString[index] ){
            let currentUnicode = inputString.charCodeAt(index);
            if( currentUnicode >= 97 && currentUnicode <= 122 ){
                sumLowerCase += currentUnicode;
            }
        }
    }
    totalSum = sumUpperCase + sumLowerCase;
    console.log(`The total sum is: ${totalSum}`);

}
valueOfString (["HelloFromMyAwesomePROGRAM",
    "LOWERCASE"]); 


    valueOfString (["AC/DC",
   "UPPERCASE"]);