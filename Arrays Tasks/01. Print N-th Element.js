
function solve(arr) {

    let step = Number(arr[arr.length - 1]); //Взема последния елемент от масив
    // let n = arr[arr.length - 1]; //Това също
    arr.pop();

    let resultArr = [];
    
    for (let i = 0; i < arr.length; i += step) {
        resultArr.push(arr[i]);
    }
    console.log(resultArr.join(' '));
}

solve(['5', '20', '31', '4', '20', '2']);