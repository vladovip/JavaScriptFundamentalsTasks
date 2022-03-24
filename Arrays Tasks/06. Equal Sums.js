function solve(arr){

    let indexOfEl = -1;

    for(let i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];   
        }

        if (rightSum === leftSum) {
            indexOfEl = i;
        }
    }

    if (indexOfEl !== -1){
        console.log(indexOfEl);
    } else {
        console.log('no');
    }

    // console.log(indexOfEl !== -1 ? indexOfEl : 'no');
}

solve([1, 2, 3, 3]);