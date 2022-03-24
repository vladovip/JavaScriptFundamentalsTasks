function radioCrystals (arrayNums) {
    
 let desiredThickness = arrayNums[0];
 let  startingThickness = 0;
 // console.log(desiredThinkness);
for (let index = 1; index < arrayNums.length; index++) {
    startingThickness = arrayNums[index];
}

let currentThickness = startingThickness;

//Cut – cuts the crystal in 4
function cutOperation (currentThickness){
    return currentThickness = currentThickness/4;
}
 let cutResult = cutOperation (currentThickness);

// Lap – removes 20% of the crystal’s thickness
function lapOperation (currentThickness){
    return currentThickness = (currentThickness- 0.20*currentThickness)
}
let lapResult= lapOperation (currentThickness);

// Grind – removes 20 microns of thickness
function grindOperation (currentThickness){
    return currentThickness = currentThickness-20;
}
let grindResult = grindOperation (currentThickness)

// Etch – removes 2 microns of thickness
function etchOperation (currentThickness){
    return currentThickness = currentThickness-2;
}
let etchResult = etchOperation (currentThickness);

//X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
function xRayOperation (currentThickness){
 return currentThickness = currentThickness+1;
}
let xRayResult = xRayOperation (currentThickness);

// Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); 
// do this after every batch of operations that remove material
 function transportingAndWashing (currentThickness){
     return Math.floor(currentThickness) 
 }
 let transpAndWashResult = transportingAndWashing (currentThickness);

 while ( currentThickness >= desiredThickness ){
    cutResult(currentThickness);
    transpAndWashResult(currentThickness);
    lapResult(currentThickness);
    transpAndWashResult(currentThickness);
    grindResult(currentThickness);
    transpAndWashResult(currentThickness);
    etchResult(currentThickness);
    transpAndWashResult(currentThickness);
    xRayResult(currentThickness);
 }
 
 //?? and what are the next steps ???






}
 radioCrystals([1375, 50000])