function solve(inputArr) {
  let numberOfCars = Number(inputArr.shift());

  let arrOfCars = inputArr.splice(0, numberOfCars);
  // console.log(arrOfCars);

  let carObjCollection = {};

  for (let index = 0; index < arrOfCars.length; index++) {
    // "Audi A6|38000|62",
    let carInfoLine = arrOfCars[index];
    let tokens = carInfoLine.split("|");
    let car = tokens[0];
    let mileage = Number(tokens[1]);
    let fuelQuantity = Number(tokens[2]);
    if (carObjCollection.hasOwnProperty(car) == false) {
      carObjCollection[car] = Object.assign(
        {},
        { miles: mileage, fuel: fuelQuantity }
      );
    }
  }

  let currentInput = inputArr.shift();
  //  console.log(inputArr);
  while (currentInput !== "Stop") {
    // "Drive : Audi A6 : 543 : 47",
    let carInfoDetails = currentInput.split(" : ");
    let command = carInfoDetails[0];
    let param1 = carInfoDetails[1];
    let param2 = Number(carInfoDetails[2]);
    let param3 = Number(carInfoDetails[3]);

    if (command == "Drive") {
      let carName = param1;
      let distancedCovered = param2;
      let neededFuelForDrive = param3;
      if (carObjCollection.hasOwnProperty(carName) == true) {
        if (carObjCollection[carName].fuel < neededFuelForDrive) {
          console.log(`Not enough fuel to make that ride`);
        } else if (carObjCollection[carName].fuel >= neededFuelForDrive) {
          carObjCollection[carName].miles += distancedCovered;
          carObjCollection[carName].fuel -= neededFuelForDrive;
          console.log(
            `${carName} driven for ${distancedCovered} kilometers. ${neededFuelForDrive} liters of fuel consumed.`
          );
        }
      }

      if (carObjCollection[carName].miles > 100000) {
        console.log(`Time to sell the ${carName}!`);
        delete carObjCollection[carName];
      }
    } 

    if (command == "Refuel") {
      let carName = param1;
      let refilledFuel = param2;
      if (carObjCollection.hasOwnProperty(carName) == true) {
        if (carObjCollection[carName].fuel < 75) {
          let fuelForEachCarNeeded = 75 - carObjCollection[carName].fuel;
          if (fuelForEachCarNeeded < refilledFuel) {
            carObjCollection[carName].fuel += fuelForEachCarNeeded;
            carObjCollection[carName].fuel = 75;
            console.log(
              `${carName} refueled with ${fuelForEachCarNeeded} liters`
            );
          } else if (fuelForEachCarNeeded >= refilledFuel) {
            carObjCollection[carName].fuel += refilledFuel;
            console.log(`${carName} refueled with ${refilledFuel} liters`);
          }
        }
      }
    } 
    if (command == "Revert") {
      let carName = param1;
      let kilometers = param2;

      if (carObjCollection.hasOwnProperty(carName) == true) {
        carObjCollection[carName].miles -= kilometers;
        if (carObjCollection[carName].miles < 10000) {
          carObjCollection[carName].miles = 10000;
        } else {
          console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
        }
        
      }
    }
    currentInput = inputArr.shift();
  }

  for ( let car in carObjCollection){
    console.log(`${car} -> Mileage: ${carObjCollection[car].miles} kms, Fuel in the tank: ${carObjCollection[car].fuel} lt.`);
  }
}


solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);

console.log(`****************`);

solve([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
