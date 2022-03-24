function solve(input) {
    //? destructure the input array
    let [mainText, hardWords] = input.slice();
    mainText = mainText.split(' ');
 
    for (let i = 0; i < mainText.length; i++) {
        let word = mainText[i];
 
        for (const hardWord of hardWords) {
            if (word.endsWith('!') || word.endsWith('?') || word.endsWith(',') || word.endsWith('.')) {
                if (word.slice(0, -1) === '_'.repeat(hardWord.length)) {
                    word = word.replace('_'.repeat(hardWord.length), hardWord);
                }
            } else if (word === '_'.repeat(hardWord.length)) {
                word = hardWord;
            }
        }
        mainText[i] = word;
    }
 
    console.log(mainText.join(' '));
}