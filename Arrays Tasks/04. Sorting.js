function solution ( input){

let length = input.sort((a,b) => a-b).length;
let arr = [];

for ( let i=0; i < length; i++){
   let biggestNumber = input.pop();
   let smallestNumber = input.shift();
   arr.push(biggestNumber,smallestNumber);
    
}

console.log(arr.join(' '));


// console.log(input);


}
solution ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94] );
