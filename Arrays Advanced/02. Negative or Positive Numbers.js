function solve(numbers){

    let result=[];

    while(numbers.length>0){
        let currentElement= numbers.shift();

        if(currentElement<0){
           result.unshift(currentElement);
        } else{
            result.push(currentElement);
        }

    }
    
    for( number of result){
        console.log(number);
    }
}
solve([7, -2, 8, 9]);