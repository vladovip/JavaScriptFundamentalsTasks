function solve(input) {
  let list = {};

  let num = input.shift();

  while (input[0] !== "Statistics") {
    let line = input.shift();
    let [command, par1, par2, par3] = line.split("=");

    if (command == "Add") {
      par2 = Number(par2);
      par3 = Number(par3);
      if (!list.hasOwnProperty(par1)) {
        list[par1] = {
          sent: par2,
          received: par3,
        };
      }
    } else if (command == "Message") {
      if (list.hasOwnProperty(par1) && list.hasOwnProperty(par2)) {
        list[par1].sent += 1;
        list[par2].received += 1;

        if (list[par1].sent + list[par1].received >= num) {
          console.log(`${par1} reached the capacity!`);
          delete list[par1];
        }

        if (list[par2].sent + list[par2].received >= num) {
          console.log(`${par2} reached the capacity!`);
          delete list[par2];
        }
      }
    } else if (command == "Empty") {
      if (list.hasOwnProperty(par1)) {
        delete list[par1];
      }
      if (par1 == "All") {
        for (const user in list) {
          delete list[user];
        }
      }
    }
  }
  let count = Object.entries(list).length;
  console.log(`Users count: ${count}`);
  for (const user in list) {
    console.log(`${user} - ${list[user].sent + list[user].received}`);
  }
}
solve([
  "12",
  "Add=Bonnie=3=5",
  "Add=Johny=4=4",
  "Empty=All",
  "Add=Bonnie=3=3",
  "Statistics",
]);
