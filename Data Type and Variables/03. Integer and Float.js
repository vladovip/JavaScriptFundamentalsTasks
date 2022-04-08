function solve(firstNumbwer, secondNumber, thirdNumber) {

     let sum = firstNumbwer+secondNumber+thirdNumber;

     if ( sum % 1!== 0){
         console.log(`${sum} - Float`);
     } else {
         console.log (`${sum} - Integer`);
     }


}
solve(9, 100, 1.1);