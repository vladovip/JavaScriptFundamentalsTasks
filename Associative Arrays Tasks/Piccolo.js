function solve(input) {

    let map = new Map();

    for (let line of input) {
        let tokens = line.split(',');
        let command = tokens[0];
        let car = tokens[1];

        if (command == 'IN') {
            map.set(car, []);
        } else {
            map.delete(car);
        }
    }

    if (map.size == 0) {
        console.log("Parking Lot is Empty");
    }

    sorted = Array.from(map);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (element of sorted) {
        console.log(element[0]);
    }
}