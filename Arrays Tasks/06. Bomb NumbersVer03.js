function solution(array, bombinfo) {

    let bomb = bombinfo[0];
    let bombRange = bombinfo[1];
    let index = array.indexOf(bomb);

    while (index > -1) {

        array.splice(Math.max ((index - bombRange),0), Math.min(bombRange,index)); //left detonation
        index = array.indexOf(bomb);
        array.splice(index, (bombRange + 1)); // right detonation 
        index = array.indexOf(bomb);
    }


   
    function calculationSum(array){
        let sum = 0; 
        for ( let n of array){
            sum += n;
        }
        return sum;
    }

    console.log(calculationSum(array));

}

solution([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);