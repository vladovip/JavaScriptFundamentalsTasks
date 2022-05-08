function degustationParty( input) {

  let Allmeals = {};
  let counterOfUnlikedMeals = 0;
  let commandLine = input.shift();

  while ( commandLine != "Stop"){
      let [command, currentGuest, snack] = commandLine.split("-");
      // console.log(command, guest, meal);
      

      if (command == "Like"){
        if ( Allmeals.hasOwnProperty(currentGuest) ==  false){
          Allmeals[currentGuest] = [];
          Allmeals[currentGuest].push(snack);
        } else if (Allmeals.hasOwnProperty(currentGuest) == true ){
          if(Allmeals[currentGuest].includes(snack)== false){
            Allmeals[currentGuest].push(snack);
          } else if (Allmeals[currentGuest].includes(snack) == true ){
            continue;
          }
        }  
      }
      
      if ( command == "Dislike"){

        if(Allmeals.hasOwnProperty(currentGuest) ==  true){
         
          if (Allmeals[currentGuest].includes(snack) == true){
            let indexOfSnack = Allmeals[currentGuest].indexOf(snack);
            Allmeals[currentGuest].splice(indexOfSnack, 1);
            counterOfUnlikedMeals++;
            console.log(`${currentGuest} doesn't like the ${snack}.`);
          } else if( Allmeals[currentGuest].includes(snack) == false ){
               console.log(`${currentGuest} doesn't have the ${snack} in his/her collection.`);
          }      
        }

        if (Allmeals.hasOwnProperty(currentGuest) == false){
          console.log(`${currentGuest} is not at the party.`);
        }
      }
      commandLine = input.shift();
  }

  
  let guestMealArr = Object.entries(Allmeals);
  for( let [key,value] of guestMealArr ){
    console.log(`${key}: ${value.join(", ")}`);
  }
  console.log(`Unliked meals: ${counterOfUnlikedMeals}`);


}

degustationParty([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Penelope-dessert",
  "Like-Misho-salad",
  "Stop",
]);

console.log(`------------`);

degustationParty([
  "Like-Krisi-shrimps",
  "Dislike-Vili-carp",
  "Dislike-Krisi-salad",
  "Stop",
]);

console.log(`------------`);


degustationParty(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])





// ●	The possible outputs are:
// o	"{Guest} doesn't like the {meal}."
// o	"{Guest} is not at the party."
// o	"{Guest} doesn't have the {meal} in his/her collection."
// o	"{Guest1}: {meal1}, {meal2} ... {mealN}
// {Guest2}: {meal1}, {meal2} ... {mealN}
// …
// {GuestN}: {meal1}, {meal2} ... {mealN}
// Unliked meals: {count of all unliked meals}"
