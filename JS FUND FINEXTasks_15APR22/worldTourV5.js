// 100 points in judge 

function worldTourV5 (inputArr) {

    let textLocations = inputArr.shift();
    let line = inputArr.shift();
    while (line !== 'Travel') {
        let [command, ...rest] = line.split(':');
        switch (command.trim()) {
            case 'Add Stop':
                let index = Number(rest[0]);
                let string = rest[1];
                if (index >= 0 && index <= textLocations.length) {
                    textLocations = textLocations.split('');
                    textLocations.splice(index, 0, string);
                    textLocations = textLocations.join('');
                }
                break;
            case 'Remove Stop':
                let startIndex = Number(rest[0]);
                let endIndex = Number(rest[1]);
                if (
                    startIndex >= 0 &&
                    startIndex < textLocations.length &&
                    endIndex >= 0 &&
                    endIndex < textLocations.length &&
                    startIndex <= endIndex
                ) {
                    textLocations = textLocations.split('');
                    textLocations.splice(startIndex, endIndex - startIndex + 1);
                    textLocations = textLocations.join('');
                }
                break;
            case 'Switch':
                let oldString = rest[0];
                let newString = rest[1];
                let offset = 0;
                while (textLocations.indexOf(oldString, offset) >= 0) {
                    textLocations = textLocations.replace(oldString, (oldString, offset) => newString);
                    offset = textLocations.indexOf(oldString, offset) + newString.length;
                }
                
                break;
            default:
                break;
        }
        console.log(textLocations);
        line = inputArr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${textLocations}`);
}

worldTourV5 (["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]
);
