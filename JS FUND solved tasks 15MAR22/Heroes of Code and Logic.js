function heroesOfCodeAndLogic(input) {
    let num = Number(input.shift());
    let heroList = {};
    for (let i = 0; i < num; i++) {
        let [hero, hp, mana] = input.shift().split(' ');
        if (heroList.hasOwnProperty(hero) == false) {
            heroList[hero] = [];
        }
        heroList[hero] = [Number(hp), Number(mana)];
    }
    while (input[0] !== 'End') {
        let data = input.shift();
        if (data.includes('CastSpell')) {
            let [command, hero, mana, spell] = data.split(' - ');
            if (heroList[hero][1] < Number(mana)) {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            } else {
               heroList[hero][1] -= Number(mana);
               console.log(`${hero} has successfully cast ${spell} and now has ${heroList[hero][1]} MP!`); 
            }
        } else if (data.includes('TakeDamage')) {
            let [command, hero, damage, attacker] = data.split(' - ');
            heroList[hero][0] -= Number(damage);
            if (heroList[hero][0] > 0) {
               console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroList[hero][0]} HP left!`); 
            } else {
                delete heroList[hero];
                console.log(`${hero} has been killed by ${attacker}!`);
            }
        } else if (data.includes('Recharge')) {
            let [command, hero, amount] = data.split(' - ');
            let oldMP = heroList[hero][1];
            heroList[hero][1] += Number(amount);
            if (heroList[hero][1] > 200) {
                heroList[hero][1] = 200;
                console.log(`${hero} recharged for ${200 - oldMP} MP!`);
            } else {
                console.log(`${hero} recharged for ${amount} MP!`);
            }
        } else if (data.includes('Heal')) {
            let [command, hero, amount] = data.split(' - ');
            let oldHP = heroList[hero][0];
            heroList[hero][0] += Number(amount);
            if (heroList[hero][0] > 100) {
                heroList[hero][0] = 100;
                console.log(`${hero} healed for ${100 - oldHP} HP!`);
            } else {
                console.log(`${hero} healed for ${amount} HP!`);
            }
        }
    }
    for (let hero in heroList) {
        console.log(hero);
        let i = 0;
        for (let prop of heroList[hero]) {
            if (i == 0) {
                console.log(`  HP: ${prop}`);
            } else {
                console.log(`  MP: ${prop}`);
            }
            i++;
        }
    }
}