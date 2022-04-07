function heroRecruitment(input) {
 
    let heroes = {};
 
    while (input[0] !== "End") {
 
        let currentLine = input.shift();
        let tokens = currentLine.split(" ");
        let command = tokens[0];
        let name = tokens[1];
        let spellName = tokens[2];
 
        if (command === "Enroll") {
            if (heroes.hasOwnProperty(name) === false) {
                heroes[name] = new Set();
            } else {
                console.log(`${name} is already enrolled.`);
            }
        } else if(command === "Learn") {
            if (heroes.hasOwnProperty(name) === false) {
                console.log(`${name} doesn't exist.`);
            } else {
                if (heroes[name].has(spellName)) {
                    console.log(`${name} has already learnt ${spellName}.`);
                } else {
                    heroes[name].add(spellName);
                }
            }
        } else if (command === "Unlearn") {
            if (heroes.hasOwnProperty(name) === false) {
                console.log(`${name} doesn't exist.`);
            } else {
                if (heroes[name].has(spellName) === false) {
                    console.log(`${name} doesn't know ${spellName}.`)
                } else {
                    heroes[name].delete(spellName);
                }
            }
        }
    }
 
    let entries = Object.entries(heroes);
    console.log("Heroes:");
    for (let [name, spells] of entries) {
        
        let spellArr = [];
        for (let spell of spells) {
            spellArr.push(spell)
        }
        
        console.log(`== ${name}: ${spellArr.join(", ")}`);
    }
 
 
}