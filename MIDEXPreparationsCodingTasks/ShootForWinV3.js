function shootForWin(inputArr) {
  
  let targetList = inputArr.shift().split(" ").map( x => Number(x));

  let commandLineArr = inputArr;
  let counter = 0;
  // shootForWin(  targetList -> ["24 50 36 70"] , commandLineArr ->[ "0", "4", "3", "1", "End"]);
  let currentElement = commandLineArr.shift();
  while (currentElement !== "End") {
    let targetIndex = Number.parseInt(currentElement);
    let hittedTarget = targetList[targetIndex];

    if (targetIndex < targetList.length && targetIndex >= 0 && targetList[targetIndex] !==-1) {
      
        for (let j = 0; j < targetList.length; j++) {
        if ( j !== targetIndex && targetList[j] !== -1) {
          if (targetList[j] > hittedTarget) {
            targetList[j] -= hittedTarget;
          } else if (targetList[j] <= hittedTarget) {
            targetList[j] += hittedTarget;
          }
        }
      }
      counter++;
      targetList[targetIndex] = -1;
    }

    currentElement = commandLineArr.shift();
  }

  console.log(`Shot targets: ${counter} -> ${targetList.join(" ")}`);
}


shootForWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);


// let hittedElement = targetList[currentIndex];
// targetList[currentIndex] = -1;
// counter++;
// for ( let target  of targetList) {
//     if ( target != -1  && target > hittedElement){
//         target -= hittedElement;
//       } else if ( target !=-1  && target <= hittedElement ){
//         target += hittedElement;
//       }
//    }
