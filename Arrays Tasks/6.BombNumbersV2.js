function bombNumber(arrayOfNums, ArrayBombNumber) {
  let bombNumber = ArrayBombNumber[0];
  let bombRadius = ArrayBombNumber[1];


  let indexofBomb = arrayOfNums.indexOf(bombNumber);
  

  while (indexofBomb !== -1) {
    let startExplsionIndex = Math.max(0, indexofBomb - bombRadius);
    let explosionLength = bombRadius * 2 + 1;
    arrayOfNums.splice(startExplsionIndex, explosionLength);
    
    indexofBomb = arrayOfNums.indexOf(bombNumber);
  }
  //  let sum = arrayOfNums.reduce((a,b)=> a+b, 0); - short method for sum of elements 
  let sum = 0;
  for (const number of arrayOfNums) {
    sum += number;
  }
  console.log(sum);
}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
