function mirrorWords(text) {
    let pattern = /([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(text);
    let validWords = 0;
    let mirrorWordsFounded = {};
    while (match !== null) {
        validWords++;
        let first = match[2];
        let second = match[3].split('').reverse().join('');
        if (first === second) {
            mirrorWordsFounded[first] = match[3];
        }
        match = pattern.exec(text);
    }
    if (validWords < 1) {
        console.log('No word pairs found!');
    } else {
        console.log(`${validWords} word pairs found!`);
    }
    if (Object.keys(mirrorWordsFounded).length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        let result = '';
        let i = 0;
        for (let key in mirrorWordsFounded) {
            if (i < 1) {
                result += `${key} <=> ${mirrorWordsFounded[key]}`;
            } else {
                result += `, ${key} <=> ${mirrorWordsFounded[key]}`;
            }
            i++;
        }
        console.log(result);
    }
}