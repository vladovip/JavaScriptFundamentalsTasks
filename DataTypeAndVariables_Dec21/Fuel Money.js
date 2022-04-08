function solve (distance, passengers, pricePerLiter) {

    let fuelNeeded = (distance / 100) * 7 + (passengers * 0.1) ;
    let MoneyForTravel = fuelNeeded * pricePerLiter;

    console.log(`Needed money for that trip is ${MoneyForTravel.toFixed(3)} lv `)

}
solve(90, 14, 2.88);

/* Write a function which calculates how much money 
for fuel will be needed to drive а bus from one place to another 
*/