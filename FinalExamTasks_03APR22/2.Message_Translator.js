function solve(input) {
    let n = input.shift()
    let pattern = /!(?<command>[A-Z][a-z]{2,})!\:\[(?<string>[A-Za-z]{8,})\]/g
    let list

    for (let i = 0; i < n; i++) {
        let line = input[i]
        let match = pattern.exec(line)

        if (match == null) {
            console.log(`The message is invalid`);
        } else {
            let string = match.groups['string']
            let command = match.groups['command']
            let arr = []
            for (let char of string) {
                arr.push(char.charCodeAt())
            }
            console.log(`${command}: ${arr.join(' ')}`);
        }

    }

}

solve(['2',
    '!Send!:[IvanisHere]',
    '*Time@:[Itis5amA1ready]'])