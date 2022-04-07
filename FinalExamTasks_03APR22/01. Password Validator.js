function passwordValidator (inputArr){
 
    let userpassWord = inputArr.shift();
    // console.log(userpassWord);   
 
    let currendCommandLine = inputArr.shift();
 
    while ( currendCommandLine != "Complete"){
       
         let tokens = currendCommandLine.split(" ");
         let command = tokens[0];
 
         if ( command == "Add"){
 
         } else if (command == "Replace"){
 
            let char = tokens[1];
            // console.log(char);
            let value = Number(tokens[2]);
            let ASCIIvalueChar = char.charCodeAt(0);
            let sumValue = ASCIIvalueChar+value;
            let newChar = String.fromCharCode(sumValue);
            let passwordArr = userpassWord.split("");
            for (let index = 0; index < passwordArr.length; index++) {
                if (char == passwordArr[index]){
                    passwordArr[index]= newChar;
                } else if (char != passwordArr[index]  )
                  userpassWord = passwordArr.join("");
            }
            userpassWord = passwordArr.join("");
            console.log(userpassWord);
 
         } else if ( command == "Insert"){
 
            let index = Number(tokens[1]);
            let char = tokens[2];
            // console.log(userpassWord);
            // console.log(index, char);
            userpassWord.split("").splice(index,0,char).join("");
            console.log(userpassWord);
            
         } else if ( tokens[0] + " " + tokens[1] == "Make Upper" ){
 
             let givenIndex = Number(tokens[2]);
             let searchedChar = userpassWord.charAt(givenIndex);
             let upperCaseLetter = searchedChar.toUpperCase();
             userpassWord.replace(searchedChar, upperCaseLetter);
             console.log(userpassWord);
 
         } else if ( tokens[0] + " " + tokens[1] == "Make Lower"){
 
            let givenIndex = Number(tokens[2]);
            let searchedChar = userpassWord.charAt(givenIndex);
            let lowerCaseLetter = searchedChar.toLowerCase();
            userpassWord.replace(searchedChar, lowerCaseLetter);
            console.log(userpassWord);
         } else if ( tokens[0] == "Validation"){
              
            let userPasswordArray = userpassWord.split("");
            let userPasswordLength = userPasswordArray.length;
            let RegExpAllPassword = /\w+/g;
            let isvalidPassword = RegExpAllPassword.test(userpassWord);
            // console.log(isvalidPassword);
            
            let UpperCaseRegExp = /[A-Z]+/g;
            let isContainUpperCase = UpperCaseRegExp.test(userpassWord);
 
            let loweCaseRegExp = /[a-z]+/g;
            let isConatainLowerCaseLetter = loweCaseRegExp.test(userpassWord);
 
            let digitInPasswordRegExp = /[0-9]+/g;
            let isContainDigits = digitInPasswordRegExp.test(userpassWord);
 
            if (userPasswordLength <= 8 ){
                console.log(`Password must be at least 8 characters long!`);
            } else if (!(isvalidPassword)){
             console.log(`Password must consist only of letters, digits and _!`);
            } else if (!(isContainUpperCase)){
                console.log(`Password must consist at least one uppercase letter!`);
            } else if (!(isConatainLowerCaseLetter)){
               console.log(`Password must consist at least one lowercase letter!`);
            } else if (!(isContainDigits)){
                console.log(`Password must consist at least one digit!`);
            }
         }
        
        currendCommandLine = inputArr.shift();
 
    }
 
}
 
passwordValidator ( (['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])
) 
 
console.log(`-----------`);
 
 
passwordValidator((['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete'])
 )