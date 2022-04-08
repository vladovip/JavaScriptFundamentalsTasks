function solve(lostFights, helmPrice, swordPrice, shieldPrice, armourPrice) {

    let brokenHelmets = Math.floor(lostFights / 2);
    let brokenSwords = Math.floor(lostFights / 3);
    let brokenShields = Math.floor(lostFights / 6);
    let brokenArmour = Math.floor(brokenShields / 2);

    let totalexpenses = (brokenHelmets * helmPrice) +
        (brokenSwords * swordPrice) +
        (brokenShields * shieldPrice) +
        (brokenArmour * armourPrice);

    console.log(`Gladiator expenses: ${totalexpenses.toFixed(2)} aureus`);





} solve(23,
    12.50,
    21.50,
    40,
    200

);