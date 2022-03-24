function solve(firstWord, char, secondWord) {

    let replacedWord = "";
    for (let i = 0; i < firstWord.length; i++) {

        if (firstWord[i] === "_") {
            replacedWord = replacedWord + char;
        } else {
            replacedWord += firstWord[i];
        }

    }

    if (replacedWord === secondWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }



}
solve('Str_ng', 'I', 'Strong');