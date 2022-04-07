function activationKeys(input) {
 
    let word = input.shift();
 
    while (input[0] !== "Generate") {
        let tokens = input.shift().split(">>>");
        let command = tokens[0];
        if (command === "Flip") {
            let type = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let split = word.slice(startIndex, endIndex);
            let left = word.slice(0, startIndex);
            let right = word.slice(endIndex);
 
            if (type === "Upper") {
                let changed = split.toUpperCase();
                word = left + changed + right;
                console.log(word);
            } else {
                let changed = split.toLowerCase();
                word = left + changed + right;
                console.log(word);
            }
        } else if (command === "Slice") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let left = word.slice(0, startIndex);
            let right = word.slice(endIndex);
            word = left + right
           
            console.log(word);
 
        } else if (command === "Contains") {
            let key = tokens[1];
 
            if (word.includes(key)) {
                console.log(`${word} contains ${key}`);
            } else {
                console.log("Substring not found!");
            }
        }
    }
    
    console.log(`Your activation key is: ${word}`);
 
}