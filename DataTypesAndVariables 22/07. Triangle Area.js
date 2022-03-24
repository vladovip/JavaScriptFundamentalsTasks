function solve(a, b, c,) {


    let halfperimeter = (a + b + c) / 2;

    let triangleArea = Math.sqrt (halfperimeter * (halfperimeter - a) * (halfperimeter - b) * (halfperimeter - c));

    console.log(triangleArea);


}

solve(2, 3.5, 4);

/*Write a function that calculates a triangle’s area by its 3 sides.
The input comes as three number arguments, representing one side of a triangle.
The output should be printed to the console.*/
