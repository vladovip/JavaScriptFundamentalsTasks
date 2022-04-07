function solve(input) {
    let string = input.shift()

    while (input[0] !== 'Finish') {
        let line = input.shift();
        let [command, par1, par2] = line.split(' ')

        if (command == 'Replace') {
            string = string.split(par1).join(par2)
            console.log(string);
        } else if (command == 'Cut') {
            let startIndex = Number(par1)
            let ednIndex = Number(par2)

            if (string[startIndex] !== undefined && string[ednIndex] !== undefined) {
                let left = string.slice(0, startIndex)
                let right = string.slice(ednIndex)
                string = left + right
                console.log(string);
            } else {
                console.log(`Invalid indeces`);
            }
        } else if (command == 'Make') {
            let upper = string.toUpperCase()
            let lower = string.toLowerCase()
            if (par1 == 'Upper') {
                string = upper
                console.log(string);
            } else if (par1 == 'Lower') {
                string = lower
                console.log(string);
            }
        } else if (command == 'Check') {
            if (string.includes(par1)) {
                console.log(`Message contains ${par1}`);
            } else {
                console.log(`Message doesn't contains ${par1}`);
            }
        } else if (command == 'Sum') {
            let startIndexd = Number(par1)
            let ednIndex = Number(par2)
            let sum = 0
            if (string[startIndexd] !== undefined && string[ednIndex] !== undefined) {
                let text = string.substring(startIndexd, ednIndex+1)
                let textArr = text.split('')
                console.log(textArr);
                let sum = 0
                for (let char of textArr) {
                    sum += char.charCodeAt()
                }
                console.log(sum);
            } else {
                console.log(`Invalid indeces`);
            }
        }
    }
}
solve(['ILikeSoftUni',
    'Replace I We',
    'Make Upper',
    'Check SoftUni',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
])