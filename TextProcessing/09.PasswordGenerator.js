function passwordGenerator(inputArr) {

let vowelsArr = ["a", "e", "i", "o", "u"];
let firstString = inputArr[0];
let secondString = inputArr[1];
let thirdString = inputArr[2];

let combineStr = firstString.concat(secondString);
// console.log(combineStr);
let reversedPassword = "";
thirdString = thirdString.toLowerCase();
let vowelIndex = 0;
for (let index = 0; index < combineStr.length; index++) {
    if (vowelsArr.includes(combineStr[index])){
        let indexOfChar = vowelIndex % thirdString.length;
        vowelIndex++;
        let currentChar = thirdString.charAt(indexOfChar);
        reversedPassword += currentChar.toUpperCase();
    } else {
        reversedPassword += combineStr[index];   
        }  
}
 console.log( `Your generated password is ${reversedPassword.split("").reverse().join("")}`);

}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
