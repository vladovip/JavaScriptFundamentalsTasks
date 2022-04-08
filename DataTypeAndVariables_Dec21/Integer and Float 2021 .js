function solve (num1,num2,num3) {

    let sumNum = num1 + num2+num3;
    let result = (sumNum % 1 == 0 ) ?  `${sumNum} - Integer` : `${sumNum} - Float`;
    console.log(result);

}
solve(9, 100, 1.1);

/* 
You will receive 3 numbers. Your task is to find their sum and
 print it to the console with the addition 
" - {type of the number (Integer or Float)}":
*/ 