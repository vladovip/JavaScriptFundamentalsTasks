
function solve(number) {
  number = number.toString();

  totalSum = 0;
  for (let position = 0; position < number.length; position++) {
    totalSum += Number(number[position]);
  }
  console.log(totalSum);
}

solve(571651);

