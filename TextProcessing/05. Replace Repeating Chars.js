function solve (textLine) {
    
    let uniqueChar = "";
    for (let index = 0; index < textLine.length; index++) {
        let currChar = textLine.charAt(index);
        let nextChar = textLine.charAt(index+1);
        if(currChar != nextChar  ){
            uniqueChar += currChar;
        }
    }
    console.log(uniqueChar);
}

solve("aaaaabbbbbwwwwwfffssszzzaaadrzzzsssf");