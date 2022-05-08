function BossRush(inputArr) {
  let countNum = Number(inputArr.shift());
  let startCounter = 0;

  let textLine = inputArr.shift();
  let patternRegExp = /\|(?<bossName>[A-Z]{4,})\|\:\#(?<bossTitle>[a-zA-z]{1}[a-zA-Z]+\s{1}[a-zA-Z]{1}[a-zA-Z]+)\#/;

  while (startCounter < countNum) {
    let allMatches = patternRegExp.exec(textLine);
    if (allMatches != null) {
      console.log(
        `${allMatches.groups.bossName}, The ${allMatches.groups.bossTitle}`
      );
      console.log(`>> Strength: ${allMatches.groups.bossName.length}`);
      console.log(`>> Armor: ${allMatches.groups.bossTitle.length}`);
    } else {
      console.log(`Access denied!`);
    }

    textLine = inputArr.shift();
    startCounter++;
  }
}

BossRush([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);

console.log(`---------`);


BossRush([
  "3",
  "|STEFAN|:#H1gh Overseer#",
  "|IVAN|:#Master detective#",
  "|KARL|: #Marketing lead#",
]);
