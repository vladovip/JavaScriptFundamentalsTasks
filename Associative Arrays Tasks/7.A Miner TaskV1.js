function minerTask(inputArr) {
  let resultCollection = {};


  for (let index = 0; index < inputArr.length; index +=2) {
    let mineItems = inputArr[index];
    let qty = Number(inputArr[index + 1]);

    if (resultCollection.hasOwnProperty(mineItems) == false) {
      resultCollection[mineItems] = 0;
    }
    resultCollection[mineItems] += qty;
  }

   let kvpArr = Object.entries(resultCollection);

    for (let [mineItems,qty] of kvpArr) {
      console.log(mineItems,"->",qty );
    }
}



minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);

console.log(`**********`);

minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
