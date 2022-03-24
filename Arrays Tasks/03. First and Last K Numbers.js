function solve(input) {

    let k = input.shift();

    let firstElement = input.slice(0, k);
    let lastElement = input.slice(input.length - k);

    let fisrtResult = '';
    let lastResult = '';

    for (let i = 0; i < k; i++) {

        fisrtResult += ` ${firstElement[i]}`;
        lastResult += ` ${lastElement[i]}`;
    }
   
    console.log(fisrtResult);
    console.log(lastResult);


}
solve([2, 7, 8, 9]);