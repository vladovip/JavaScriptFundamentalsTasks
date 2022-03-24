

function solve(input) {
    const heroes = {};
 
    for (const command of input) {
        let [name, level, items] = command.split(' / ');
        level = +level;
        heroes[name] = items !== undefined && /\w+/.exec(items) !== null ? { 'level': level, 'items': items } : { 'level': level }
    }
 
    for (const entry of Object.entries(heroes).sort((a, b) => a[1].level - b[1].level)) {
        console.log(`Hero: ${entry[0]}`);
        for (const key in entry[1]) {
            console.log(`${key} => ${entry[1][key]}`);
        }
    }
}