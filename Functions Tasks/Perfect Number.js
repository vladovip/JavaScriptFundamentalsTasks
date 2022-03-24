function perfectNumber(number) {
  let sumOfdivisors = 0;
  for (let index = 1; index < number; index++) {
    if (number % index == 0) {
        sumOfdivisors += index;
    }
  }
  // console.log(sumOfdivisors);
  
  if ( sumOfdivisors == number && sumOfdivisors > 0){
    console.log("We have a perfect number!");
  } else {
      console.log("It's not so perfect.");
  }

}
perfectNumber(28);
