function emojiDetector([input]) {
    //calculate cool threshold (digit regex)
    let threshold = 1;
    let coolEmogis = [];
    let digits = input.match(/\d/g).map(Number);
    for (let digit of digits) {
      threshold *= digit;
    }
    //extract all valid emogis
    let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);
   
    if (emojis != null) {
      //for each emogi
      for (let emoji of emojis) {
        //--calculate coolness
        let coolness = 0;
        let chars = emoji.slice(2, -2);
        for (let ch of chars) {
          coolness += ch.charCodeAt();
        }
        //--if above threshold ->add to final result
        if (coolness >= threshold) {
          coolEmogis.push(emoji);
        }
      }
    }
   
    console.log(`Cool threshold: ${threshold}`);
    console.log(
      `${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`
    );
    for (let emoji of coolEmogis) {
      console.log(emoji.trim());
    }
  }
  emojiDetector([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
  ]);