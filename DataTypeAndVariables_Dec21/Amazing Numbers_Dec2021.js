function solve(number) {

    let currentNumber = number.toString();
    let sum = 0;

    for (let i = 0; i < currentNumber.length; i++) {

        sum += Number(currentNumber[i]);

    }
    //console.log(sum);

    let strResult = sum.toString();
    let isAmazing = strResult.includes("9");

    if (isAmazing){
        console.log(`${number} Amazing? True`); 
    } else {
        console.log(`${number} Amazing? False`); 
    }

}

solve(13564);


/* 
Write a function which as input will receive  a number.
 Check and print if it is amazing or not into the following format: 
    "{number} Amazing? {result}"
An amazing number is one that includes the digit 9 the sum of its digits. 
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
*/ 