function solve(input) {
    let text = input.shift()
    for (let line of input) {
        let [command, par1, par2] = line.split(' ');
        if(line=='End'){
            break;
        }

        if (command=='Translate'){
            text = text.split(par1).join(par2)
            console.log(text);
        }else if (command=='Includes'){
            if(text.includes(par1)){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if (command=='Start'){
            if(text.startsWith(par1)){
                console.log('True');
            }else {
                console.log('False');
            }
        }else if (command=="Lowercase"){
            text = text.toLowerCase()
            console.log(text);
        }else if (command=='FindIndex'){
            console.log(text.lastIndexOf(par1));
        }else if (command=='Remove'){
            let index = Number(par1)
            let count = Number(par2)
            let left = text.slice(0, index)
            let right = text.slice(index+count)
            text = left+right
            console.log(text);
        }
    }
}

solve(["//Thi5 I5 MY 5trING//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
solve(['*S0ftUni is the B3St Plac3**',
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",])