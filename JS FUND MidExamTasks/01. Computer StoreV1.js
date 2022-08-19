function computerStore(inputArr) {
  let totalPriceWithoutTaxes = 0;
  let currentLine = inputArr.shift();
  while (currentLine !== "special" && currentLine !== "regular") {
    if (Number(currentLine) < 0) {
      console.log(`Invalid price!`);
    } else {
      totalPriceWithoutTaxes += Number(currentLine);
    }

    currentLine = inputArr.shift();
  }

  // console.log(totalPriceWithoutTaxes);
  if (totalPriceWithoutTaxes <= 0) {
    console.log(`Invalid order!`);
  }

  if (totalPriceWithoutTaxes > 0) {
    if (currentLine == "regular") {
      console.log(`Congratulations you've just bought a new computer!`);
      console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
      console.log(`Taxes: ${(0.2 * totalPriceWithoutTaxes).toFixed(2)}$`);
      console.log(`-----------`);
      console.log(
        `Total price: ${(
          totalPriceWithoutTaxes +
          0.2 * totalPriceWithoutTaxes
        ).toFixed(2)}$`
      );
    }

    if (currentLine == "special") {
      console.log(`Congratulations you've just bought a new computer!`);
      console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
      console.log(`Taxes: ${(0.2 * totalPriceWithoutTaxes).toFixed(2)}$`);
      console.log(`-----------`);
      console.log(
        `Total price: ${(
          (totalPriceWithoutTaxes + 0.2 * totalPriceWithoutTaxes) *
          0.9
        ).toFixed(2)}$`
      );
    }
  }
}


computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);

console.log(`*************`);

computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);

console.log(`*************`);

computerStore(["regular"]);
