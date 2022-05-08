function solve(input) {
    let spell = input.shift();
  
    while (input[0] !== "Abracadabra") {
      let line = input.shift();
      let [command, par1, par2] = line.split(" ");
  
      if (command == "Abjuration") {
        spell = spell.toUpperCase();
        console.log(spell);
      } else if (command == "Necromancy") {
        spell = spell.toLowerCase();
        console.log(spell);
      } else if (command == "Illusion") {
        let index = Number(par1);
        if (spell[index] == undefined) {
          console.log(`The spell was too weak.`);
        } else {
          spell = spell.replace(spell[index], par2);
          console.log(`Done!`);
        }
      } else if (command == "Divination") {
        if (spell.icludes(par1)) {
          let pattern = new RegExp(par1, 'g')
          spell = spell.replace(pattern, par2)
        }
      } else if (command == "Alteration") {
          let index = spell.indexOf(par1)
          let left = spell.slice(0, index)
          let right = spell.slice(index+par1.length)
          spell = left+right
          console.log(spell);
  
      } else {
        console.log(`The spell did not work!`);
      }
    }
  }
  solve(["SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  "Abracadabra"])  