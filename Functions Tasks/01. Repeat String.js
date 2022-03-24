function stringRepeat(text, repeater) {

    let result = '';
    for (let i = 0; i < repeater; i++) {
        result += text;


    }
    console.log(result);
}

stringRepeat('abc', 3)