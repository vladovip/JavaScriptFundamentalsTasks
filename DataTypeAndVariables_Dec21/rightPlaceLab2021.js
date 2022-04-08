function solve(firstWord, missingChar, secondWord) {
    let newWord = "";

    for (let i = 0; i < firstWord.length; i++) {

        if (firstWord[i] === '_') {
            newWord += missingChar;
        } else {
            newWord += firstWord[i];
        }
    }

    if (newWord == secondWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }


}
solve('Str_ng', 'I', 'Strong');


/* You will receive 3 parameters (string, char, string).
First string will be a word with a missing char replaced with a underscore '_'
You have to replace the character with the missing part (underscore) 
from the first string and compare the result with the second string.
If they are equals you should print "Matched", otherwise print "Not Matched".
*/ 