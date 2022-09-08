function solve(input) {
    input = input.join('');
    let [firstPart, secondPart, thirdPart] = input.split('|');
    let regexForFirstPart = /(\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g
    let regexForSecondPart = /([7-8][0-9]|90|65|66|67|68|69):([0-1][1-9]|20|10)/g
    // Extracting the string that matches the regex
    let capitalLetters = regexForFirstPart.exec(firstPart);
    // Making it an array
    capitalLetters = capitalLetters[1].split('');
    // Removing the symbols
    capitalLetters.shift();
    capitalLetters.pop();
    let lettersAndLengths = secondPart.match(regexForSecondPart);
    let myMap = new Map();
    for (let letter of capitalLetters) {
        myMap.set(letter, 0)
    }
    let unique = [];
    for (let combination of lettersAndLengths) {
        let [letterAsciiCode, length] = combination.split(':');
        letterAsciiCode = String.fromCharCode(letterAsciiCode);
        if (!unique.includes(letterAsciiCode)) {
            unique.push(letterAsciiCode);
        } else {
            continue;
        }
        length = Number(length) + 1;
        if (myMap.has(letterAsciiCode)) {
            myMap.set(letterAsciiCode, length);
        }
    }
    thirdPart = thirdPart.split(' ');

    for (let letter of capitalLetters) {
        for (let word of thirdPart) {
            if (letter === word[0] && word.length === myMap.get(letter)) {
                console.log(word);
            }
        }
    }
}

    // for (let word of thirdPart) {
    //     let firstLetter = word[0];
    //     if (myMap.has(firstLetter)) {
    //         let length = myMap.get(firstLetter);
    //         if (length === word.length) {
    //             console.log(word)
    //         }
    //     }
    // }