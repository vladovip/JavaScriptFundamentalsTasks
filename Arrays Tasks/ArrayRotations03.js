
function solve (array, rotations){

    for ( let index = 0; index < rotations; index ++){
       let currNum = array.shift();
       array.push(currNum);

    }
    console.log(array.join(" "));

}
solve ([51, 47, 32, 61, 21], 2);
//solve([32, 21, 61, 1], 4);
//solve([2, 4, 15, 31], 5); 




/*
function solve (arrayString, rotations){

    let newArray = arrayString.split(",");
    
     //   console.log(newArray);
    for ( let index = 0; index < rotations; index ++){
       let currNum = newArray.shift();
       newArray.push(currNum);

    }
      console.log(newArray.join(","));

} 
solve ("2,1,3,4", 5);
*/ 