function solve(input) {
  let isAlive = true;
  let dungeons = input.split("|");
  let health = 100;
  let coins = 0;
  let allCoins = 0;
  let currentDungeon = 0;

  for (const dungeon of dungeons) {
    let dungeonSplit = dungeon.split(" ");
    let command = dungeonSplit[0];
    let value = Number(dungeonSplit[1]);
    currentDungeon++;

    if (command === "potion") {
      let healedWith = value;

      if (health + value > 100) {
        healedWith = 100 - health;
        health = 100;
      } else {
        health += value;
      }
      console.log(`You healed for ${healedWith} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      coins = value;
      allCoins += value;
      console.log(`You found ${coins} bitcoins.`);
    } else {
      health = health - value;

      // To do if health <=0;

      if (health <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${currentDungeon}`);
        isAlive = false;
        break;
      }

      //  health >=0 we have met  and killed the Monster
      console.log(`You slayed ${command}.`);
    }
  }

  if (isAlive) {
    console.log(`You've made it!\nBitcoins: ${allCoins}\nHealth: ${health}`);
  }
}

