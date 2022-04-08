function triangleArea(sideA, sideB, sideC) {

    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let areaOfTriangle = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    console.log(areaOfTriangle);


}
triangleArea(2, 3.5, 4);

/* 
Write a function that calculates a triangle’s area by its 3 sides.
The input comes as three number arguments, representing one side of a triangle.
The output should be printed to the console.
 */

