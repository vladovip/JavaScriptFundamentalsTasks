function houseParty(arrayOfStrings) {
  let listGuests = [];
  for (let line of arrayOfStrings) {
    let tokens = line.split(" ");
    let name = tokens[0];
    //console.log("tokens:", tokens);
    if ( tokens.length === 3) {
      let isIncluded = listGuests.includes(name);
      if (isIncluded) {
        console.log(`${name} is already in the list!`);
      } else {
        listGuests.push(name);
      }
    } else {
      let indexOfPerson = listGuests.indexOf(name);
      if (indexOfPerson !== -1) {
        listGuests.splice(indexOfPerson, 1);
      } else {
          console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(listGuests.join("\n"));
}

/*houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);*/

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);