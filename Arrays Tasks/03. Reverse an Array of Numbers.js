function solve(length, numbers) {

    let resultArray = [];
    let result='';

    for (i = 0; i <length; i++) {
        resultArray[i] = numbers[i]
    }
    
    for( let i = length-1; i>=0; i-- ){
        result += resultArray[i] +  ' ';
       
    }
     console.log(result);

   
}
solve(3, [10, 20, 30, 40, 50]);