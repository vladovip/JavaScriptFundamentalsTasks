function solve(input) {
  let list = {};
  let count = 0;

  while (input[0] !== "Stop") {
    let line = input.shift();
    let [command, guest, meal] = line.split("-");

    if (command == "Like") {
      if (!list.hasOwnProperty(guest)) {
        list[guest] = {
          meals: [],
        };
        list[guest].meals.push(meal);
      } else {
        if (!list[guest].meals.includes(meal)) {
          list[guest].meals.push(meal);
        }
      }
    } else if (command == "Dislike") {
      if (list.hasOwnProperty(guest)) {
        if (list[guest].meals.includes(meal)) {
            let dislikeIndex = list[guest].meals.indexOf(meal)
            count++
            list[guest].meals.splice(dislikeIndex,1)
            console.log(`${guest} doesn't like the ${meal}`);
        } else {
          console.log(`${guest} doesn't have the ${meal} in his/her collection.`
          );
        }
      } else {
        console.log(`${guest} is not at the party.`);
      }
    }
  }
  for (let guest in list) {
      console.log(`${guest}: ${list[guest].meals.join(', ')}`);
  }

  console.log(`Unliked meals: ${count}`);
}
solve(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])


