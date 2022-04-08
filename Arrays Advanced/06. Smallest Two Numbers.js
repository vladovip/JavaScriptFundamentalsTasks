function solve(input){

let sortinAscending = input.sort ((a,b) => {
    return a-b;
})

let result = sortinAscending.slice(0,2);

console.log(result.join(' '));


}
solve([30, 15, 50, 5]);