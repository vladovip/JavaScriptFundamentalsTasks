function heroesCodeLogic(inputArr) {
  let numberOfHeroes = Number(inputArr.shift());
  let heroesCollectionObj = {};
  for (let index = 0; index < numberOfHeroes; index++) {
    let currentHeroInfo = inputArr[index].split(" ");
    let name = currentHeroInfo[0];
    let hitPoints = Number(currentHeroInfo[1]);
    let manaPoints = Number(currentHeroInfo[2]);

    if (heroesCollectionObj.hasOwnProperty(name) == false) {
      if (hitPoints <= 100 && manaPoints <= 200) {
        heroesCollectionObj[name] = { HP: hitPoints, MP: manaPoints };
      }
    }
  }


  let arrayOfCommands = inputArr.splice(numberOfHeroes);
  for (let commandLines of arrayOfCommands) {
    if (commandLines == "End") {
      break;
    }

    let tokens = commandLines.split(" - ");
    let currentCommand = tokens[0];
    let heroName = tokens[1];
    let param2 = Number(tokens[2]);
    let param3 = tokens[3];

    if (currentCommand == "CastSpell") {
      if (heroesCollectionObj.hasOwnProperty(heroName) == true) {
        if (heroesCollectionObj[heroName].MP >= param2) {
          heroesCollectionObj[heroName].MP -= param2;
          console.log(
            `${heroName} has successfully cast ${param3} and now has ${heroesCollectionObj[heroName].MP} MP!`
          );
        } else {
          console.log(`${heroName} does not have enough MP to cast ${param3}!`);
        }
      }
    }
    if (currentCommand == "TakeDamage") {
      if (heroesCollectionObj.hasOwnProperty(heroName) == true) {
        if (heroesCollectionObj[heroName].HP > param2) {
          heroesCollectionObj[heroName].HP -= param2;
          console.log(
            `${heroName} was hit for ${param2} HP by ${param3} and now has ${heroesCollectionObj[heroName].HP} HP left!`
          );
        } else  if (heroesCollectionObj[heroName].HP <= param2) {
          console.log(`${heroName} has been killed by ${param3}!`);
          delete heroesCollectionObj[heroName];
        }
      }
    }
    if (currentCommand == "Recharge") {
      if (heroesCollectionObj.hasOwnProperty(heroName) == true) {
        let currentMP = heroesCollectionObj[heroName].MP;
        let increasedMP = currentMP + param2;
        if (increasedMP >= 200) {
          heroesCollectionObj[heroName].MP = 200;
          console.log(`${heroName} recharged for ${200 - currentMP} MP!`);
        } else if (increasedMP < 200) {
          console.log(`${heroName} recharged for ${param2} MP!`);
          heroesCollectionObj[heroName].MP = increasedMP;
        }
      }
    }
    if (currentCommand == "Heal") {
      if (heroesCollectionObj.hasOwnProperty(heroName) == true) {
        let currentHP = heroesCollectionObj[heroName].HP;
        let increasedHP = currentHP + param2;
        if (increasedHP >= 100) {
          heroesCollectionObj[heroName].HP = 100;
          console.log(`${heroName} healed for ${100 - currentHP} HP!`);
        } else if (increasedHP < 100) {
          console.log(`${heroName} healed for ${param2} HP!`);
          heroesCollectionObj[heroName].HP = increasedHP;
        }
      }
    }
  }

   for( hero in heroesCollectionObj ){
    console.log(hero);
    console.log(`HP: ${heroesCollectionObj[hero].HP}`);
    console.log(`MP: ${heroesCollectionObj[hero].MP}`);
   }


}

heroesCodeLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);

console.log(`************`);

heroesCodeLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  " Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
