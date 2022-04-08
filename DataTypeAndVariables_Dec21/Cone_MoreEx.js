function solve (coneRadius, coneHeight) {

let coneVolume = 0;
let totalSurfaceArea = 0;

coneVolume = (1/3 * Math.PI * Math.pow(coneRadius, 2) * coneHeight).toFixed(4);
totalSurfaceArea = (Math.PI* coneRadius*(coneRadius + (Math.sqrt(coneRadius*coneRadius + coneHeight*coneHeight )))).toFixed(4);

console.log( `volume = ${coneVolume}`);
console.log( `area = ${totalSurfaceArea}`);

}
solve ( 3.3, 7.8 );

/* 
Write a function to calculate a cone’s volume and total surface area by given height and radius at the base. 
The formula for the volume of a cone is V =1/3hπr²  ;
The total surface area in terms of height can be given as, T = πr(r + l) = T = πr(r + √(h2 + r2));


*/ 

