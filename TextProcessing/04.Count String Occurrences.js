function stringOccurence (text, word){

    let tokens = text.split(" ");
    let resultArr=  tokens.filter ( a => a === word);
    console.log(resultArr.length);

}

stringOccurence ('This is a word and it also is a sentence',
'is'
);