// Yes, All answers from output has been met 
function stringGame( inputArr ){

    let text =  inputArr.shift();
    
    let commandLine = inputArr.shift();
    while ( commandLine != "Done") {
       let tokens = commandLine.split(" ");
       let currentCommand = tokens[0];
       
       if( currentCommand =="Change" ){
           let char  = Number(tokens[1]);
           let replacementChar = tokens[2];
           textArr = text.split("");
        //    console.log(textArr);
          for (let index = 0; index < textArr.length; index++) {
              if ( char == textArr[index]){
                textArr[index]= replacementChar;
              }   
          }
           text = textArr.join("");
           console.log(text);  
       }

       if (  currentCommand == "Includes" ){

           let subStr = tokens[1];
           let isIncludes = text.includes(subStr) 
           console.log(isIncludes);

       } else if( currentCommand == "End"){

           let subStrEnd = tokens[1];
           let isEndSubstr =  text.endsWith(subStrEnd);
           console.log(isEndSubstr);

       } else if( currentCommand == "Uppercase"){
           
           text = text.toUpperCase();
           console.log(text);

       } else if ( currentCommand == "FindIndex"){
              let char = tokens[1];
              let indexOfChar = text.indexOf(char);
              console.log(indexOfChar);
       } else if ( currentCommand == "Cut"){
               let startIndex = Number(tokens[1]);
               let counter = Number(tokens[2]);
               textArr = text.split("");
               text = textArr.slice( startIndex ,  startIndex + counter ).join("");
               console.log(text);
            
       }






       commandLine = inputArr.shift(); 
    }





}
stringGame( ["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"]
);


console.log(`--------`);


stringGame ((["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])
); 




// OUTPUT: 

// 1. Input : 
// //This is my string!//
// True
// False
// //THIS IS MY STRING!//
// 4
// S IS


// 2. Input :
// *S0ftUni is the B3St Plac3**
// False
// False
// *S0FTUNI IS THE B3ST PLAC3**
// 21
// FTUNI I
