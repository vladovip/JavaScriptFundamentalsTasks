function solve(distance, passengers, priceFuel) {

  let neededFuel = (distance / 100) * 7;
  neededFuel += passengers * 0.100;
  let money = neededFuel * priceFuel;

  console.log(`Needed money for that trip is ${money}lv.`)
}

solve(90, 14, 2.88);