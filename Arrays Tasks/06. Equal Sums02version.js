function solve(arr) {

    let result = 'no';

    for (let index = 0; index < arr.length; index++) {

        let leftSum = 0;
        let rightSum = 0;

        for (i = 0; i < index; i++) {
            let leftNumber = arr[i];
            leftSum += leftNumber
        }

        for (i = index + 1; i < arr.length; i++) {
            let rightNumber = arr[i];
            rightSum += rightNumber;
        }

        if (leftSum === rightSum) {
            result = index;
            break;

        }

    }
    console.log(result);
}

solve([1, 2, 3, 3]);