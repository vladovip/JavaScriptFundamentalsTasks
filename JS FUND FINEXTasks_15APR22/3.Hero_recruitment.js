function solve(input) {
    let list = {}

    while (input[0] !== 'End') {
        let line = input.shift()
        let [command, name, spell] = line.split(' ')

        if (command == 'Enroll') {
            if (list.hasOwnProperty(name)) {
                console.log(`${name} is already enrolled.`)
            } else {
                list[name] = {
                    spellbook: []
                }
            }
        } else if (command == 'Learn') {
            if (list.hasOwnProperty(name)) {
                if (list[name].spellbook.includes(spell)) {
                    console.log(`${name} has already learnt ${spell}.`);
                } else {
                    list[name].spellbook.push(spell)
                }
            } else {
                console.log(`${name} doesn't exist.`);
            }
        } else if (command == 'Unlearn') {
            if (list.hasOwnProperty(name)) {
                if (list[name].spellbook.includes(spell)) {
                    let indexOfSpell = list[name].spellbook.indexOf(spell)
                    list[name].spellbook.splice(indexOfSpell,1)
                } else {
                    console.log(`${name} doesn't know ${spell}.`);
                }
            } else {
                console.log(`${name} doesn't exist.`);
            }
        }
    }
    console.log(`Heroes:`);
    for (const name in list) {
        console.log(`== ${name}: ${list[name].spellbook.join(', ')}`);
    }
}

solve(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Stefan Dispel",
"Learn Peter Dispel",
"End"])
