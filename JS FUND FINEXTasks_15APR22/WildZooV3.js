function wildZoo(inputArr) {
    let textLine = inputArr.shift();
    let animalRecordsObj = {};
    let animalAreaObj = {};
  
    while (textLine != "EndDay") {
      let tokens = textLine.split(": ");
      let currentCommand = tokens[0];
      let animalInfoLine = tokens[1].split("-");
      let animalName = animalInfoLine[0];
      let food = Number(animalInfoLine[1]);
      let area = animalInfoLine[2];  
  
      // console.log(currentCommand, animalName, food, area);
      if (currentCommand == "Add") {
        let area = animalInfoLine[2];  
  
        if (animalRecordsObj.hasOwnProperty(animalName) == false) {
          animalRecordsObj[animalName] = { neededFood: 0, areaOfLiving: area };
          animalRecordsObj[animalName].neededFood += food;
          animalAreaObj[animalName] = area;
          
         // counter in each area to be define and set.
        } else if (animalRecordsObj.hasOwnProperty(animalName) == true) {
          animalRecordsObj[animalName].neededFood += food;
        }
  
      } else if (currentCommand == "Feed") {
       

        if (animalRecordsObj.hasOwnProperty(animalName) == true) {
          animalRecordsObj[animalName].neededFood -= food;
          if (animalRecordsObj[animalName].neededFood <= 0) {
            console.log(`${animalName} was successfully fed`);
            delete animalRecordsObj[animalName];
            delete animalAreaObj[animalName]; 
          }
        }
      } 
  
      textLine = inputArr.shift();
    }
  
    console.log(`Animals:`);
    for (let animalName in animalRecordsObj) {
      console.log(`${animalName} -> ${animalRecordsObj[animalName].neededFood}g`);
    }
  
    
    let arrOfAnimals = Object.entries(animalAreaObj);
    let areaObj = {};
    // console.log(arrOfAnimals);
    for (let index = 0; index < arrOfAnimals.length; index++) {
       let arrOfAnimal = arrOfAnimals[index].reverse();
       let area = arrOfAnimal[0];
       let animal = arrOfAnimal[1];
    //    console.log(area, animal);
        if ( areaObj.hasOwnProperty(area) == false ){
            areaObj[area] = [];
            areaObj[area].push(animal);
        } else if ( areaObj.hasOwnProperty(area) == true  ){
            if (  areaObj[area].includes(animal) == false ){
                areaObj[area].push(animal);
            }
        }
    }
    console.log(`Areas with hungry animals:`);
    for ( let area in  areaObj){
        console.log(`${area}: ${areaObj[area].length}`);
    }
    
   
  
  }
  
  wildZoo([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay",
  ]);
  
  console.log(`--------`);
  
  wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay",
  ]);
  
  console.log(`---------`);
  
  wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay",
  ]);
  