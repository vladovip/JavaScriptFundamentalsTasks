function passwordReset(input) {
    let text = input.shift();
    while (input[0] !== 'Done') {
        let data = input.shift();
        text = text.split('');
        if (data.includes('TakeOdd')) {
            text = text.filter((el, index) => {
                if (index % 2 !== 0) {
                    return el;
                }
            });
            text = text.join('');
            console.log(text);
        } else if (data.includes('Cut')) {
            let [command, index, length] = data.split(' ');
            text.splice(index, length);
            text = text.join('');
            console.log(text);
        } else if (data.includes('Substitute')) {
            let [command, substring, substitute] = data.split(' ');
            text = text.join('');
            if (text.includes(substring) == false) {
                console.log('Nothing to replace!');
            } else {
                while (text.includes(substring)) {
                    text = text.replace(substring, substitute);
                }
                console.log(text);
            }
        }
    }
    console.log(`Your password is: ${text}`);
}