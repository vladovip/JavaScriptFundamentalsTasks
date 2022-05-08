function solve(input) {
  let num = Number(input.shift());
  let pattern = /(\|)(?<boss>[A-Z]{4,})\1\:\#(?<title>[A-Za-z]+\s[A-Za-z]+)\#/;

  for (let i = 0; i < num; i++) {
    let line = input[i]
    let match = pattern.exec(line)

    if (match !== null) {
      console.log(`${match.groups["boss"]}, The ${match.groups["title"]}`);
      console.log(`>> Strength: ${match.groups["boss"].length}`);
      console.log(`>> Armor: ${match.groups["title"].length}`);
    } else {
      console.log(`Access denied!`);
    }
  }
}
solve([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);
