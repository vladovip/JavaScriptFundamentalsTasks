function picolo(inputArr) {
  let parking = new Set();

  for (let lines of inputArr) {
    let [command, number] = lines.split(", ");
    if (command == "IN") {
      parking.add(number);
    } else {
      parking.delete(number);
    }
  }

  if ((parking.size == 0)) {
    console.log(`Parking Lot is Empty`);
  }  else  {
     let resultArr = Array.from(parking).sort();
     for (carNumber of resultArr) {
      console.log(carNumber);
    }
  }
}
picolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

console.log(`*****`);

picolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
