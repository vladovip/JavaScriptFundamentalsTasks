function solve(input) {

    let currentArray = input.split(" ");
    // console.log(currentArray);

    let averageSumArray = 0;

    let resultArray = [];
    let textResult = ' ';

    for (let i = 0; i < currentArray.length; i++) {
        currentArray[i] = Number(currentArray[i]);
        averageSumArray += currentArray[i];
    }

    // console.log(averageSumArray);
    averagevalueArray = averageSumArray / currentArray.length;
    //console.log(averagevalue);

    for (let numbers of currentArray) {

        if (numbers > averagevalueArray) {
            textResult += numbers + " ";
            //console.log(textResult);   
        }

    }
    resultArray = textResult.split(" , ");
    console.log(resultArray);

    //let sortedArray = resultArray.sort(function(a, b){return b - a});
    // TO DO - descending order with resultArray
    // Example:
    // var points = [40, 100, 1, 5, 25, 10];
    //points.sort(function(a, b){return b - a}); 



}

solve('10 20 30 40 50');
