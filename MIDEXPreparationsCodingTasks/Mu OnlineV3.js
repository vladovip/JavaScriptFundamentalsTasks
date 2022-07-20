function muOnline(strInput) {
  let heroHealth = 100;
  let heroBitcoins = 0;

  let inputArr = strInput.split("|");
  //   console.log(inputArr);
  // ['rat 10', 'bat 20', 'potion 10', 'rat 10', 'chest 100', 'boss 70', 'chest 1000']

  for (let index = 0; index < inputArr.length; index++) {
    let room = index + 1;
    let commandLine = inputArr[index].split(" ");
    let command = commandLine[0];
    let param1 = Number(commandLine[1]);

    if (command == "potion") {
      if (heroHealth < 100) {
        if (heroHealth + param1 < 100) {
          heroHealth += param1;
          console.log(`You healed for ${param1} hp.`);
          console.log(`Current health: ${heroHealth} hp.`);
        } else if (heroHealth + param1 >= 100) {
          let tempHeroHealth = heroHealth;
          heroHealth = 100;
          console.log(`You healed for ${100 - tempHeroHealth} hp.`);
          console.log(`Current health: ${heroHealth} hp.`);
        }
      }
    } else if (command === "chest") {
      heroBitcoins += param1;
      console.log(`You found ${param1} bitcoins.`);
    } else if (command !== "chest" && command !== "potion") {
      heroHealth -= param1;
      if (heroHealth <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${room}`);
        break;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
  }

  if (heroHealth > 0) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${heroBitcoins}`);
    console.log(`Health: ${heroHealth}`);
  }

}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

console.log(`************`);

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

// console.log(`You've made it!`);
// console.log(`Bitcoins: ${heroBitcoins}`);
// console.log(`Health: ${heroHealth}`);
