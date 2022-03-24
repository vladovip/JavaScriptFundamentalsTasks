function solve(startingYield) {

    let days = 0;
    let collectedSpice = 0;

    while (startingYield >= 100) {
        collectedSpice += (startingYield - 26);
        days++;
        startingYield -= 10;
    }

    collectedSpice -= 26;

    console.log(days);
    console.log(Math.max(collectedSpice, 0));



} solve(111

);