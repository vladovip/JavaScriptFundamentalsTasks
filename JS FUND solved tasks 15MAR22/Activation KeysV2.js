function activationKeys(input) {
    let activationKey = input.shift();
    while (input[0] !== 'Generate') {
        let data = input.shift();
        if (data.includes('Contains')) {
            let [command, substring] = data.split('>>>');
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (data.includes('Flip')) {
            let [command, caseLorU, startIndex, endIndex] = data.split('>>>');
            activationKey = activationKey.split('');
            let toChange = activationKey.splice(Number(startIndex), (Number(endIndex) - Number(startIndex)));
            let changed = '';
            for (let char of toChange) {
                let code = char.charCodeAt();
                if (code > 47 && code < 58) {
                    changed += char;
                } else {
                    if (caseLorU == 'Upper') {
                        changed += char.toUpperCase();
                    } else {
                        changed += char.toLowerCase();
                    }
                }
            }
            activationKey.splice(Number(startIndex), 0, changed);
            activationKey = activationKey.join('');
            console.log(activationKey);
        } else if (data.includes('Slice')) {
            let [command, startIndex, endIndex] = data.split('>>>');
            activationKey = activationKey.split('');
            activationKey.splice(Number(startIndex), (Number(endIndex) - Number(startIndex)));
            activationKey = activationKey.join('');
            console.log(activationKey);
        }
    }
    console.log(`Your activation key is: ${activationKey}`);
}