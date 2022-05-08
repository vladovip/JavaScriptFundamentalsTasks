// YES - ALL ANSWERS HAVE BEEN MET!!!! 100 % completed

function passwordValidator (inputArr){
 
    let CurrentUserPassWord = inputArr.shift();
    let currendCommandLine = inputArr.shift();

    while (currendCommandLine != "Complete" ){
         let tokens = currendCommandLine.split(" ");
         
        if ((tokens[0] + " " + tokens[1]) == "Make Upper"){
            let index = Number(tokens[2]);
            let searchedChar =  CurrentUserPassWord.charAt(index);
            CurrentUserPassWord = CurrentUserPassWord.replace(searchedChar, searchedChar.toUpperCase());
            console.log(CurrentUserPassWord);      
        } else if ((tokens[0] + " " + tokens[1]) == "Make Lower"){
            let index = Number(tokens[2]);
            let searchedChar =  CurrentUserPassWord.charAt(index);
            CurrentUserPassWord = CurrentUserPassWord.replace(searchedChar, searchedChar.toLowerCase());
            console.log(CurrentUserPassWord);   
        } else if ( tokens[0] == "Insert"){
             let index = Number(tokens[1]);
             let char = tokens[2];
             if ( index >=0 ){
                let curentPassArr = CurrentUserPassWord.split("");
                //  console.log(curentPassArr);
                curentPassArr.splice(index,0,char);
                CurrentUserPassWord = curentPassArr.join("");
                console.log(CurrentUserPassWord);
            } else if ( index < 0) {
                continue;
            } 
        } else if (tokens[0] == "Replace" ){
              let char = tokens[1];
              let value = Number(tokens[2]);
              let ASCIICode = char.charCodeAt(0);
              let newValue = value + ASCIICode;
              let newChar = String.fromCharCode(newValue);
              let tempArr = CurrentUserPassWord.split("");
              for (let index = 0; index < tempArr.length; index++) {
                  if (  char == tempArr[index] ){
                      tempArr[index] = newChar
                  } else if ( char !== tempArr[index] ){
                      continue;
                  }   
              }
              CurrentUserPassWord = tempArr.join("");
              console.log(CurrentUserPassWord);

        } else if ( tokens[0] == "Validation"){
         
          if  (CurrentUserPassWord.length < 8 ){
              console.log(`Password must be at least 8 characters long!`);
          }
          
          let LetterDigitsRegExp = /\w+/g;
          let containsValidLetterDigits = LetterDigitsRegExp.test(CurrentUserPassWord);
          if ( containsValidLetterDigits == false  ){
              console.log(`Password must consist only of letters, digits and _!`);
          }

          let OneUpperCaseLetter = /[A-Z]+/g;
          let isValidOneUppCaseLetter = OneUpperCaseLetter.test(CurrentUserPassWord);
          if (   isValidOneUppCaseLetter == false  ){
              console.log(`Password must consist at least one uppercase letter!`);
          }
          
          let OneLowerCaseLetRegExp = /[a-z]+/g;
          let isValidLowerCase = OneLowerCaseLetRegExp.test(CurrentUserPassWord);
          if (  isValidLowerCase == false  ){
              console.log(`Password must consist at least one lowercase letter!`);
          }

          let atLeastOneDigits = /[0-9]+/g;
          let isValidDigits = atLeastOneDigits.test(CurrentUserPassWord);
          if (  isValidDigits == false  ){
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