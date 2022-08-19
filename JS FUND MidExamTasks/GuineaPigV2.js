function guineaPig(inputArr) {
  let foodQuantity = Number(inputArr.shift());
  let hayQuantity = Number(inputArr.shift());
  let coverQ = Number(inputArr.shift());
  let guineaWeights = Number(inputArr.shift());
  let counter = 1;

  // guineaPig(["10", "5", "5.2", "1"]);
  while (counter <= 30) {
   
    foodQuantity -= 0.3;

    if (counter % 2 == 0) {
      hayQuantity -= 0.05 * foodQuantity;
    }
    if (counter % 3 == 0) {
      coverQ -= (1 / 3) * guineaWeights;
    }
    counter++;
  }

  if (foodQuantity <= 0 || hayQuantity <= 0 || coverQ <= 0) {
    console.log(`Merry must go to the pet store!`);
  } else if ( foodQuantity >= 0 && hayQuantity >= 0 && coverQ >= 0) {
     console.log(`Everything is fine! Puppy is happy! Food: ${foodQuantity.toFixed(2)}, Hay: ${hayQuantity.toFixed(2)}, Cover: ${coverQ.toFixed(2)}.`);
  }

}


guineaPig(["10", "5", "5.2", "1"]);
console.log(`*******`);
guineaPig(["1", "1.5", "3", "1.5"]);
