function blackFlag(inputArr) {
  let piratingDuration = Number(inputArr.shift());
  let plunderPerDay = Number(inputArr.shift());
  let targetPlunder = Number(inputArr.shift());
  let result = 0;


  for (let day = 1; day <= piratingDuration; day++) {
    result += plunderPerDay;
    // "5", "40", "100"
    if (day % 3 == 0) {
      result += 0.5 * plunderPerDay;
    }
    if (day % 5 == 0) {
      result = 0.7 * result;
    }
  }

  if (result >= targetPlunder) {
    console.log(`Ahoy! ${result} plunder gained.`);
  } else {
    let percentage = (result / targetPlunder) * 100;
    console.log(`Collected only ${percentage}% of the plunder.`);
  }
  
}

blackFlag(["5", "40", "100"]);

console.log(`*************`);

blackFlag(["10", "20", "380"]);
