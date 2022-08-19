function solve(input) {
    let travelRoute = input[0];
    let fuel = Number(input[1]);
    let ammunition = Number(input[2]);
    let isFailed = false;
  
    let commands = travelRoute.split("||");
  
    for (let i = 0; i < commands.length; i++) {
      let currCommand = commands[i];
      let tokens = currCommand.split(" ");
      let command = tokens[0];
      let value = Number(tokens[1]);
  
      if (command == "Titan") {
        isFailed = false;
        break;
      }
      if (command == "Travel") {
        if (value <= fuel) {
          fuel -= value;
          console.log(`The spaceship travelled ${value} light-years.`);
        } else {
          console.log(`Mission failed.`);
          isFailed = true;
        }
  
        if (isFailed == true) {
          break;
        }
      } else if (command == "Enemy") {
        if (value <= ammunition) {
          ammunition -= value;
          console.log(`An enemy with ${value} armour is defeated.`);
        } else if (value > ammunition) {
          if (value * 2 <= fuel) {
            fuel -= value * 2;
            console.log(`An enemy with ${value} armour is outmaneuvered.`);
          } else {
            console.log(`Mission failed.`);
            isFailed = true;
          }
        }
        if (isFailed == true) {
          break;
        }
      } else if (command == "Repair") {
        fuel += value;
        ammunition += value * 2;
        console.log(`Ammunitions added: ${value * 2}.`);
        console.log(`Fuel added: ${value}.`);
      }
    }
    if (!isFailed) {
      console.log(`You have reached Titan, all passengers are safe.`);
    }
  }