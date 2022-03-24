function solve(arrOne, arrTwo) {

    let resultArr = [];

    for (let index in arrOne) {
        let result;
        let arrOneElement = arrOne[index];
        let arrTwoElement = arrTwo[index]

        if (index % 2 === 0) {
            result = Number(arrOneElement) + Number(arrTwoElement) + "";
        } else {
            result = arrOneElement + arrTwoElement;
        }
        
         resultArr.push(result);     
    }
     
     console.log(resultArr.join(' - '));

}
solve(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']

);
