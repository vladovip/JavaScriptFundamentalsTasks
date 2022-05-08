function followers(inputArr) {
  let recordFollowers = {};
  let commandLine = inputArr.shift();
  let counterAllFollowers = 0;

  while (commandLine != "Log out") {
    let tokens = commandLine.split(": ");
    let command = tokens[0];
    let currentUser = tokens[1];
    let counterOfLikes = Number(tokens[2]);
    // console.log(command);

    if (command == "New follower") {

      if (recordFollowers.hasOwnProperty(currentUser) == false) {
        recordFollowers[currentUser] = { likes: 0, comments: 0 };
        counterAllFollowers += 1;
      }
    } else if (command == "Like") {

      if (recordFollowers.hasOwnProperty(currentUser) == false) {
        recordFollowers[currentUser] = { likes: counterOfLikes, comments: 0 };
        counterAllFollowers += 1;
      } else if (recordFollowers.hasOwnProperty(currentUser) == true) {
        recordFollowers[currentUser].likes += counterOfLikes;
      }
    } else if (command == "Comment") {

      if (recordFollowers.hasOwnProperty(currentUser) == false) {
        recordFollowers[currentUser] = { likes: 0, comments: 1 };
        counterAllFollowers += 1;
      } else if (recordFollowers.hasOwnProperty(currentUser) == true) {
        recordFollowers[currentUser].comments += 1;
      }
    } else if (command == "Blocked") {

      if (recordFollowers.hasOwnProperty(currentUser) == true) {
        delete recordFollowers[currentUser];
        counterAllFollowers -= 1;
      } else if (recordFollowers.hasOwnProperty(currentUser) == false) {
        console.log(`${currentUser} doesn't exist.`);
      }
    }

    commandLine = inputArr.shift();
    
  }

  console.log(`${counterAllFollowers} followers`);

  for (let names of Object.keys(recordFollowers)) {
    let sumLikesComments =
      recordFollowers[names].likes + recordFollowers[names].comments;
    console.log(`${names}: ${sumLikesComments}`);
  }

}

followers([
  "New follower: George",
  "Like: George: 5",
  "New follower: George",
  "Log out",
]);

console.log(`-------`);

followers([
  "Like: Katy: 3",
  "Comment: Katy",
  "New follower: Bob",
  "Blocked: Bob",
  "New follower: Amy",
  "Like: Amy: 4",
  "Log out",
]);

console.log(`-------`);

followers([
  "Blocked: Amy",
  "Comment: Amy",
  "New follower: Amy",
  "Like: Tom: 5",
  "Like: Ellie: 5",
  "Log out",
]);
