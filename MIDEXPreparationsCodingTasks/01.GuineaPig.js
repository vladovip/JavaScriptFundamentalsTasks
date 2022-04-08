function guineaPig(inputArr) {
  let foodQuantity = Number(inputArr.shift()); // quantity food in kilograms
  // console.log(foodQuantity);
  let hayQuantity = Number(inputArr.shift()); // quantity hay in kilograms
  let coverQuantity = Number(inputArr.shift()); // quantity cover in kilograms
  let guineaWeight = Number(inputArr.shift()); // guinea's weight in kilograms
  day = 1;

  
  while (day <= 30) {
    foodQuantity -= 0.3;
    if (day % 2 === 0) {
      hayQuantity -= 0.05 * foodQuantity;
    }
    if (day % 3 === 0) {
      coverQuantity -= (1 / 3) * guineaWeight;
    }

    day++;
  }

  if (foodQuantity > 0 && hayQuantity > 0 && coverQuantity > 0) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${foodQuantity.toFixed(
        2
      )}, Hay: ${hayQuantity.toFixed(2)}, Cover: ${coverQuantity.toFixed(2)}.`
    );
  } else {
    console.log(`Merry must go to the pet store!`);
  }
}   

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);

// Expected Result:  Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87
