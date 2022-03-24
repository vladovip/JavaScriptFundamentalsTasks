function solve(input) {
    let result = {};

    let sorted = input.split(' ').map(x => x.toLowerCase());
    let printResult = [];

    for (let i = 0; i < sorted.length; i++) {
        let element = sorted[i];
        if(result[element] == null){
            result[element] = 1;
        }else{
            result[element]++;
        }

    }

    for (let key in result){

        if(result[key] % 2 != 0){
            printResult.push(key);
    }
    }
    console.log(printResult.join(' '));
}