function emojiDetector(text) {
    let digitsPattern = /\d/g;
    let emojiPattern = /([*]{2}|[:]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let matchDigits = digitsPattern.exec(text);
    let compareForCoolness = 1;
    while (matchDigits !== null) {
        compareForCoolness *= Number(matchDigits[0]);
        matchDigits = digitsPattern.exec(text);
    }
    let matchEmojies = emojiPattern.exec(text);
    let emojiesFound = [];
    let coolEmojies = [];
    while (matchEmojies !== null) {
        let count = 0;
        let currEmoji = matchEmojies[2];
        for (let char of currEmoji) {
            let code = char.charCodeAt();
            count += code;
        }
        if (count > compareForCoolness) {
            coolEmojies.push(matchEmojies[0]);
        }
        emojiesFound.push(matchEmojies[2]);
        matchEmojies = emojiPattern.exec(text);
    }
    console.log(`Cool threshold: ${compareForCoolness}`);
    console.log(`${emojiesFound.length} emojis found in the text. The cool ones are:`);
    coolEmojies.forEach(x => console.log(x));
}