function solve(input) {
    let string = input.shift()

    while (input[0] !== 'Done') {
        let line = input.shift()
        let [command, par1, par2] = line.split(' ')

        if (command == 'Change') {
            string = string.split(par1).join(par2)
            console.log(string);
        } else if (command == 'Includes') {
            if (string.includes(par1)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command == 'Uppercase') {
            string= string.toUpperCase()
            console.log(string);
        } else if (command == 'End') {
            if(string.endsWith(par1)){
                console.log('True');
            }else{
                console.log('False');
            }
        } else if (command == 'FindIndex') {
            let index = string.indexOf(par1)
            console.log(index);
        } else if (command == 'Cut') {
            let startIndex = Number(par1);
            let count = Number(par2)
            string = string.slice(startIndex,startIndex+count)
            console.log(string);
        }
    }
}
solve(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])

