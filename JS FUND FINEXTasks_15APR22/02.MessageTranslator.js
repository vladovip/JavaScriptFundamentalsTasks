function messageTranslator(input) {

    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<text>[a-zA-Z]{8,})\]/g;

    let count = input.shift();

    for (let i = 0; i < count; i++) {
        let current = input[i];

        let match = pattern.exec(current);

        if (match === null) {
            console.log("The message is invalid");
        } else {
            let command = match.groups.command;

            let text =  match.groups.text;

            let translated = [];

            for (let char of text) {
                let num = char.charCodeAt(); 
                if (num === 32) {
                    continue;
                } else {
                    translated.push(num)
                }
            }

            console.log(`${command}: ${translated.join(" ")}`);

        }
    }
    
}


messageTranslator([
"2", 
"!Send!:[IvanisHere]", 
"*Time@:[Itis5amAlready"
]);

console.log(`---------`);

messageTranslator([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);





// old solution as follows: 

// function messageTranslator(input) {

//     let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<text>[a-zA-Z]{8,})\]/g;

//     let count = input.shift();

//     for (let i = 0; i < count; i++) {
//         let current = input[i];

//         let match = pattern.exec(current);

//         if (match === null) {
//             console.log("The message is invalid");
//         } else {
//             let command = match.groups.command;

//             let text =  match.groups.text;

//             let translated = [];

//             for (let char of text) {
//                 let num = char.charCodeAt(); 
//                 if (num === 32) {
//                     continue;
//                 } else {
//                     translated.push(num)
//                 }
//             }

//             console.log(`${command}: ${translated.join(" ")}`);

//         }
//     }
    
// }