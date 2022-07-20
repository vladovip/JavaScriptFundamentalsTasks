function lift(inputArr) {
  let peopleNum = +inputArr.shift();
  let arrOfWagons = inputArr.shift().split(" ");
  // console.log( peopleNum, arrOfWagons);

  for (let index = 0; index < arrOfWagons.length; index++) {
    while (Number(arrOfWagons[index]) < 4 && peopleNum > 0) {
      let currentNumPeopWagon = Number(arrOfWagons[index]);
      currentNumPeopWagon++;
      peopleNum--;
      arrOfWagons[index] = currentNumPeopWagon;
    }
  }

  if (peopleNum <= 0 && arrOfWagons[arrOfWagons.length - 1] < 4 ) {
    
        console.log(`The lift has empty spots!`);
        console.log(`${arrOfWagons.join(" ")}`);
    
  }

  if ( peopleNum > 0 && arrOfWagons[arrOfWagons.length - 1] == 4 ) {
    console.log(`There isn't enough space! ${peopleNum} people in a queue!`);
    console.log(`${arrOfWagons.join(" ")}`);
  }


  if( arrOfWagons[arrOfWagons.length - 1] == 4 && peopleNum <= 0   ){
      console.log(`${arrOfWagons.join(" ")}`);
  }

}

lift(["15", "0 0 0 0 0"]);

console.log(`-----------`);

lift(["20", "0 2 0"]);


// 100 points in the judge system!