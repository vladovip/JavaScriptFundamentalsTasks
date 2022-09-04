function mirrorWords(str) {
    let patternWordPairs = /(@|#)(?<w1>[A-Za-z]{3,})\1\1(?<w2>[A-Za-z]{3,})\1/g
    let pairs = [...str[0].matchAll(patternWordPairs)];
    let palindroms = [];
    let mirrorWordsPrint = [];
    
    for (let pair of pairs) {
        let w1 = pair[2];
        let w2 = pair[3];
        let w2Reverse = w2.split('').reverse().join('');
        if (w1 == w2Reverse) {
            palindroms.push(w1);
            mirrorWordsPrint.push(`${w1} <=> ${w2}`); 
        }
    }
    if (pairs.length > 0) {
        console.log(`${pairs.length} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }
    if (palindroms.length > 0) {
            console.log(`The mirror words are:\n${mirrorWordsPrint.join(', ')}`);  
 
    } else {
        console.log(`No mirror words!`);
    }
 
}
 
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log(`=======`);
mirrorWords(
    ['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']
);
 