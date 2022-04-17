function pirates(input) {
  let commandLine = input.shift();
  let targets = {};

  while (commandLine != "Sail") {
    let [city, populationNum, goldQuantity] = commandLine.split("||");
    // console.log(town,population,gold);
    if (!targets.hasOwnProperty(city)) {
      targets[city] = [Number(populationNum), Number(goldQuantity)];
    } else {
      targets[city][0] += Number(populationNum);
      targets[city][1] += Number(goldQuantity);
    }
    commandLine = input.shift();
  }

  commandLine = input.shift();

  while (commandLine != "End") {
    let [command, city, population, gold] = commandLine.split("=>");

    if (command == "Plunder") {
      targets[city][0] -= Number(population);
      targets[city][1] -= Number(gold);
      if (targets[city][0] <= 0 || targets[city][1] <= 0) {
        delete targets[city];
        console.log(
            `${city} plundered! ${Number(gold)} gold stolen, ${Number(
              population
            )} citizens killed.`
          );
        console.log(`${city} has been wiped off the map!`);
      } else {
        console.log(
          `${city} plundered! ${Number(gold)} gold stolen, ${Number(
            population
          )} citizens killed.`
        );
      }
    } else if (command == "Prosper") {

      let goldAmount = Number(population);
      if (goldAmount >= 0) {
        targets[city][1] += Number(goldAmount);
        console.log(
          `${goldAmount} gold added to the city treasury. ${city} now has ${targets[city][1]} gold.`
        );
      } else if (goldAmount < 0) {
        console.log(`Gold added cannot be a negative number!`);
      }
    }
    commandLine = input.shift();
  }


  let citiesPrint = Object.values(targets).length;
  if ( citiesPrint < 0 ){
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  }  else {
      console.log(`Ahoy, Captain! There are ${citiesPrint} wealthy settlements to go to:`);
    
     let kvpOfCitiesPopulGold =  Object.entries(targets);
     kvpOfCitiesPopulGold.forEach((key) => {
         console.log(`${key[0]} -> Population: ${key[1][0]} citizens, Gold: ${key[1][1]} kg`);
     });
  }


}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);


console.log(`-----------`);


pirates((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
);

