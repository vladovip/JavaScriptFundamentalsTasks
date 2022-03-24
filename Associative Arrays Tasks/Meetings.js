function meeting(inputArr) {
  let result = {};

  for (let line of inputArr) {
    let [day, name] = line.split(" ");
    if(result.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
    } else {
        result[day] = name;
        console.log(`Scheduled for ${day}`);
    }
  }

  for (let day in result) {
    console.log(day, "->", result[day]);
  }
}


meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

meeting([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
