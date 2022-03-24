function buildWall(arrayOfStrings) {
  let numArrHeightSections = arrayOfStrings.map(Number);

  let totalCubicYardsOfConcrete = 0;
  let tempArr = [];
  let sumofSectionHeight = 0;

  for (let index = 0; index < numArrHeightSections.length; index++) {
    sumofSectionHeight += numArrHeightSections[index];
  }

  while (sumofSectionHeight < numArrHeightSections.length * 30) {
    let concreteUsedForDay = 0;
    for (let index = 0; index < numArrHeightSections.length; index++) {
      if (numArrHeightSections[index] == 30) {
        continue;
      } else {
        numArrHeightSections[index]++;
        totalCubicYardsOfConcrete += 195;
        concreteUsedForDay += 195;
      }
    }
    tempArr.push(concreteUsedForDay);
    
     sumofSectionHeight=0;
     for (let sectionHeight of numArrHeightSections) {
        sumofSectionHeight += sectionHeight;
     }
  }
    console.log(tempArr.join(', '));
    console.log(`${totalCubicYardsOfConcrete * 1900} pesos`);
}

buildWall([21, 25, 28]);
