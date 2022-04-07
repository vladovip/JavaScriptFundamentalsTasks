function heroesOfCodeAndLogic(input) {
  let actions = {
    CastSpell: castspell,
    TakeDamage: takedamage,
    Recharge: recharge,
    Heal: heal,
  };
  let n = Number(input.shift());
  let heroes = {};

  for (let index = 0; index < n; index++) {
    let [name, Hp, Mp] = input.shift().split(" ");
    Hp = Number(Hp);
    Mp = Number(Mp);
    heroes[name] = {
      Hp,
      Mp,
    };
  }

  while (input[0] !== "End") {
    let [command, heroName, param1, param2] = input.shift().split(" - ");
    param1 = Number(param1);
    let action = actions[command];
    action(heroName, param1, param2);
  }

  function castspell(heroName, MpNeeded, spellName) {
    MpNeeded = Number(MpNeeded);

    if (heroes.hasOwnProperty(heroName)) {
      if (heroes[heroName].Mp >= MpNeeded) {
        heroes[heroName].Mp -= MpNeeded;
        console.log(
          `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].Mp} MP!`
        );
      } else {
        console.log(
          `${heroName} does not have enough MP to cast ${spellName}!`
        );
      }
    }
  }

  function takedamage(heroName, damage, attacker) {
    damage = Number(damage);

    if (heroes.hasOwnProperty(heroName)) {
      heroes[heroName].Hp -= damage;

      if (heroes[heroName].Hp > 0) {
        console.log(
          `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].Hp} HP left!`
        );
      } else {
        delete heroes[heroName];
        console.log(`${heroName} has been killed by ${attacker}!`);
      }
    }
  }

  function recharge(heroName, amount) {
    amount = Number(amount);
    if (heroes.hasOwnProperty(heroName)) {
      heroes[heroName].Mp += amount;
      let difference = 0;

      if (heroes[heroName].Mp > 200) {
        let currDifference = Math.abs(200 - heroes[heroName].Mp);
        let nextDifference = 200 - amount + currDifference;
        difference = 200 - nextDifference;
        heroes[heroName].Mp = 200;
        console.log(`${heroName} recharged for ${difference} MP!`);
      } else {
        console.log(`${heroName} recharged for ${amount} MP!`);
      }
    }
  }

  function heal(heroName, amount) {
    amount = Number(amount);
    if (heroes.hasOwnProperty(heroName)) {
      heroes[heroName].Hp += amount;
      let difference = 0;

      if (heroes[heroName].Hp > 100) {
        let currDifference = Math.abs(100 - heroes[heroName].Hp);
        let nextDifference = 100 - amount + currDifference;
        difference = 100 - nextDifference;
        heroes[heroName].Hp = 100;
        console.log(`${heroName} healed for ${difference} HP!`);
      } else {
        console.log(`${heroName} healed for ${amount} HP!`);
      }
    }
  }

  let entries = Object.entries(heroes);

  for (let [heroName, properties] of entries) {
    console.log(`${heroName}`);
    console.log(`  HP: ${properties.Hp}`);
    console.log(`  MP: ${properties.Mp}`);
  }
}
heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log("-----------------------");

heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);


// https://pastebin.com/qiGDsN2Z  