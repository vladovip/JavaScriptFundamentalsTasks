function sortingArray(arrayofNumbers) {
    
    arrayofNumbers = arrayofNumbers.sort((a,b) => b - a );
    // console.log(arrayofNumbers);
     let newArray = [];
    
     while(arrayofNumbers.length > 0){
         let biggerNum = arrayofNumbers.shift();
         newArray.push(biggerNum);
         //console.log(biggerNum);
         let smallerNum = arrayofNumbers.pop();
         newArray.push(smallerNum);
         //console.log(smallerNum);
     }
     console.log(newArray.join(" "));

}
sortingArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94] )