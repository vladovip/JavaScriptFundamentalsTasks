function solve (lostFightsCounter,helmetPrice,swordPrice,shieldPrice,armourPrice ){
  
    let expenses = 0;
    let brokenHelmets = Math.floor(lostFightsCounter/2);
    let brokenSwords = Math.floor(lostFightsCounter/3);
    let brokenShields = Math.floor(lostFightsCounter/6);
    let brokenArmours= Math.floor(brokenShields/2);

    expenses = (brokenHelmets*helmetPrice)+(brokenSwords*swordPrice)+(brokenShields*shieldPrice)+
    (brokenArmours* armourPrice);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);


}

solve (23,
    12.50,
    21.50,
    40,
    200
     ) ; 