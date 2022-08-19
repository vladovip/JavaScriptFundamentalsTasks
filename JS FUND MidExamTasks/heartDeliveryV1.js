function heartDelivery(inputArr) {

    let neighbourhoodHousesArr = inputArr.shift().split('@').map(x => Number(x));
    //   console.log(neighbourhoodHousesArr);
    // (4) [10, 10, 10, 2]  -> neighborhood list
    // (3) [2, 4, 2]  -> neighborhood list
    
    let currentIndex = 0;

    while ( inputArr[0] !== "Love!"){
      let tokens = inputArr.shift().split(" ");
      let stepLength = Number(tokens[1]);
    //   console.log(jump, stepLength);
    //   "Jump 1",   "Jump 2",  "Jump 3",
    // (4) [10, 10, 10, 2]  -> neighborhood list
    // (3) [2, 4, 2]  -> neighborhood list
      currentIndex += stepLength; 
     if ( currentIndex >= neighbourhoodHousesArr.length){
        currentIndex = 0
     }

     if( neighbourhoodHousesArr[currentIndex] == 0){
        console.log(`Place ${currentIndex} already had Valentine's day.`);
     } else if ( neighbourhoodHousesArr[currentIndex] !== 0 ){
        neighbourhoodHousesArr[currentIndex] -=2;
        if( neighbourhoodHousesArr[currentIndex] == 0 ){
            console.log(`Place ${currentIndex} has Valentine's day.`);
        }
     }
    }

    
  let missedHouses = 0;
  for (let eachHouse of neighbourhoodHousesArr) {
    if (eachHouse > 0) {
        missedHouses++;
    }
  }

  console.log(`Cupid's last position was ${currentIndex}.`);
  if (missedHouses <= 0) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${missedHouses} places.`);
  }

}


heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

console.log(`*******************`);

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
