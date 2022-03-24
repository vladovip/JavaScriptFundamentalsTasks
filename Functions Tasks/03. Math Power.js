function mathPower(number, level){

    let result = 1; 
    for ( let i = 0; i < level; i++){

        result = result*number;
    }
     return result;


}

console.log(mathPower(2 , 8));