//  All answers from output has been met! 
function heroRecruitment(input) {
  
  let allHeroesObj = {};
  let commandline = input.shift();
  while (commandline !== "End") {
    let tokens = commandline.split(" ");
    // console.log(tokens);
    let currentCommand = tokens[0];
    let heroName = tokens[1];
    let spellName = tokens[2];

    if (currentCommand == "Enroll") {
      if (allHeroesObj.hasOwnProperty(heroName) == false) {
        allHeroesObj[heroName] = [];
      } else if (allHeroesObj.hasOwnProperty(heroName) == true)
        console.log(`${heroName} is already enrolled.`);
    }

    if (currentCommand == "Learn") {
      if (allHeroesObj.hasOwnProperty(heroName) == true) {
        if (allHeroesObj[heroName].includes(spellName) == false) {
          allHeroesObj[heroName].push(spellName);
        } else if (allHeroesObj[heroName].includes(spellName) == true) {
          console.log(`${heroName} has already learnt ${spellName}.`);
        }
      } else if (allHeroesObj.hasOwnProperty(heroName) == false) {
        console.log(`${heroName} doesn't exist.`);
      }
    }

    if (currentCommand == "Unlearn") {

      if (allHeroesObj.hasOwnProperty(heroName) == false) {
        console.log(`${heroName} doesn't exist.`);

      } else if (allHeroesObj.hasOwnProperty(heroName) == true) {

        if (allHeroesObj[heroName].includes(spellName) == true) {
            let indexOfSpellName = Number(allHeroesObj[heroName].indexOf(spellName));
            allHeroesObj[heroName].splice(indexOfSpellName, 1);

        } else if (allHeroesObj[heroName].includes(spellName) == false) {
          console.log(`${heroName} doesn't know ${spellName}.`);
        }
      }
    }
    commandline = input.shift();
  }

  let arrOfHeroes = Object.entries(allHeroesObj);
  console.log(`Heroes:`);
  for ( let hero of  arrOfHeroes){ 
    console.log(`== ${hero[0]}: ${hero[1].join(", ")}`);  
  }  
}

heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);

console.log(`--------`);

heroRecruitment([
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stefan ItShouldWork",
  "Unlearn Stefan NotFound",
  "End",
]);

console.log(`--------`);

heroRecruitment(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"]);