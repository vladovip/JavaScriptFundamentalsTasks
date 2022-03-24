function solve(radius, height) {


    let volume = ((Math.PI * radius * radius * height) / 3);
    let slantHeight = Math.sqrt((radius * radius) + (height * height));
    let surfaceArea = (Math.PI * radius * radius) + (Math.PI * radius * slantHeight);


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);


}
solve(3.3, 7.8);

//Write a function to calculate a cone’s volume and total surface area by given height and radius at the base.
//The input comes as two number arguments. 
//The first element is the cone’s radius and the second is its height.
//The output should be printed to the console on a new line for every result. 
//The result should be formatted to the fourth decimal point
