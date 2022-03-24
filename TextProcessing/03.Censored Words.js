function  censoredWords (str, word) {

    // First option : 
    // let result = str.replaceAll(word,"*".repeat(word.length));
    // console.log(result);
  
    // Second option :
   // while (text.includes(word) ){
   //    text = text.replace(word,"*".repeat(word.length));
   // }
   //   console.log(text);
  
   // Third option : 
   let tokens = str.split(word);
   console.log( tokens.join("*".repeat(word.length)))
}

censoredWords ('A small sentence with some words', 'small'); 
censoredWords ('Find the hidden word', 'hidden');