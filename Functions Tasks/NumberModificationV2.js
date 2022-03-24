function numberModification(currentNum) {
  
function getAverageSum ( number ){
    let arrayNum= number.toString().split("");
    let sumOfElements = 0;
    let averageSum = 0;
    for (let index = 0; index < arrayNum.length; index++) {
         sumOfElements += Number (arrayNum[index]);
         averageSum = sumOfElements / arrayNum.length
   }
   return averageSum;
}

while (getAverageSum(currentNum) < 5) {
    currentNum += '9';
}

console.log(currentNum);
 
}
numberModification(101);

// 101 + 9 + 9 + 9 +9 +9 + 9
