function solve(arr, rot) {

    let rotations = rot % arr.length;
    let resultArr = [];

    for (let index in arr) {
        if (index >= rotations) {
            let element = arr[index]
            resultArr.push(element)
        }
    }

    for (let index in arr) {

        if (index < rotations) {
            let element = arr[index]
            resultArr.push(element)
        } else {
            break;
        }
    }
    console.log(resultArr.join(' ')); 
   // console.log(resultArr.toString());

}

solve([32, 21, 61, 1], 4);
