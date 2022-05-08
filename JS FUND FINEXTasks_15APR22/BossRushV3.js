function solve(input) {
   
    let n = Number(input.shift());
   
    for (let i = 0; i < n; i++) {
        let line = input[i];
        let pattern = /(\|)(?<name>[A-Z]+)\1:#(?<title>[A-Za-z]+\s{1}[A-Za-z]+)#/;
        let match = pattern.exec(line);

        if (match !== null) {

            let name = match.groups.name;
            let title = match.groups.title;
            let lengthName = match.groups.name.length;
            let lengthTitle = match.groups.title.length;
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${lengthName}`);
            console.log(`>> Armor: ${lengthTitle}`);
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
  
  console.log(`---------`);
  
  
  solve([
    "3",
    "|STEFAN|:#H1gh Overseer#",
    "|IVAN|:#Master detective#",
    "|KARL|: #Marketing lead#",
  ]);