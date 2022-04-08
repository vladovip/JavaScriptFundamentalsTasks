// Write a function that prints whether a given character is upper-case or lower-case. 

function solve (currentSymbol) {
    
    let currentUnicode = currentSymbol.charCodeAt(0);
    //console.log(currentUnicode);
    
    if (65 <= currentUnicode &&  currentUnicode <=90 ) {
        console.log( "upper-case"); 
    } else if (97 <= currentUnicode && currentUnicode <= 122 ){
        console.log( "lower-case"); 
    }
   

} 
solve ('f');
