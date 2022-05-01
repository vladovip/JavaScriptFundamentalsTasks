function needForSpeed(input) {
    let num = Number(input.shift());
    let carList = {};
    for (let i = 0; i < num; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        carList[car] = [Number(mileage), Number(fuel)];
    }
    while (input[0] !== 'Stop') {
        let data = input.shift();
        if (data.includes('Drive')) {
            let [command, car, distance, fuel] = data.split(' : ');
            if (carList[car][1] < fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                carList[car][0] += Number(distance);
                carList[car][1] -= Number(fuel);
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (carList[car][0] >= 100000) {
                    delete carList[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }
        } else if (data.includes('Refuel')) {
            let [command, car, fuel] = data.split(' : ');
            if (carList[car][1] + Number(fuel) > 75) {
                console.log(`${car} refueled with ${75 - carList[car][1]} liters`);
                carList[car][1] = 75;
            } else {
                carList[car][1] += Number(fuel);
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (data.includes('Revert')) {
            let [command, car, kilometers] = data.split(' : ');
            carList[car][0] -= Number(kilometers);
            if (carList[car][0] < 10000) {
                carList[car][0] = 10000;
                continue;
            }
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }
    for (let key in carList) {
        console.log(`${key} -> Mileage: ${carList[key][0]} kms, Fuel in the tank: ${carList[key][1]} lt.`);
    }
}