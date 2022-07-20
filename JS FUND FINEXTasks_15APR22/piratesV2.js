function pirates ( inputArr) {

let targetedCityLine = inputArr.shift();
let targetListObj = {};
while (targetedCityLine !== "Sail" ){
    
    let tokens = targetedCityLine.split('||');
    let city = tokens[0];
    let population = Number(tokens[1]);
    let gold = Number(tokens[2]);
    if (targetListObj.hasOwnProperty(city)  == false){
        targetListObj[city] = Object.assign({}, {population, gold} )
    } else if ( targetListObj.hasOwnProperty(city)  == true){
        targetListObj[city].population += population;
        targetListObj[city].gold += gold;
    }
    targetedCityLine = inputArr.shift();
}
//  for (let key in targetListObj) {
//     console.log(key , targetListObj[key]);
//  }
// Tortuga {population: 345000, gold: 1250}
// Santo Domingo {population: 240000, gold: 630}
// Havana {population: 410000, gold: 1100}

//  ['Plunder=>Tortuga=>75000=>380', 'Prosper=>Santo Domingo=>180', 'End']
let currentCommandLine = inputArr.shift();
while ( currentCommandLine !== 'End'){
    let tokens = currentCommandLine.split('=>');
    let command = tokens[0];
    let cityCommand = tokens[1];
    let peopleCommand = Number(tokens[2]);
    let goldCommand = Number(tokens[3]);

   if ( command === 'Plunder' ){
       if ( targetListObj.hasOwnProperty(cityCommand) == true){
        targetListObj[cityCommand].population -= peopleCommand;
        targetListObj[cityCommand].gold -= goldCommand;
        console.log(`${cityCommand} plundered! ${goldCommand} gold stolen, ${peopleCommand} citizens killed.`);
        if( targetListObj[cityCommand].population == 0 || targetListObj[cityCommand].gold == 0 ){
            delete targetListObj[cityCommand];
            console.log(`${cityCommand} has been wiped off the map!`);
        }
       }
   }

   if ( command ==='Prosper'){
     let goldIncerementation =  Number(tokens[2]);
     if( goldIncerementation < 0 ){
       console.log(`Gold added cannot be a negative number!`);
     } else if ( goldIncerementation >=0  ) {
        if ( targetListObj.hasOwnProperty(cityCommand) == true){
            targetListObj[cityCommand].gold += goldIncerementation;
            console.log(`${goldIncerementation} gold added to the city treasury. ${cityCommand} now has ${targetListObj[cityCommand].gold} gold.`);
     }
   }
}
    currentCommandLine = inputArr.shift();
}

let arrofCities = Object.keys(targetListObj);
let numberCitiesLeft = arrofCities.length;

if ( numberCitiesLeft > 0){
    console.log(`Ahoy, Captain! There are ${numberCitiesLeft} wealthy settlements to go to:`);
  for (let town in targetListObj) {
    console.log(`${town} -> Population: ${targetListObj[town].population} citizens, Gold: ${targetListObj[town].gold} kg`)
  }
} else if (  numberCitiesLeft <= 0  ){
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
}



} 



pirates (["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]); 


console.log(`*************`)


pirates (["Nassau||95000||1000",
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
