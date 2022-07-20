function fancyBarcode(inputArr) {
  let numberLength = Number(inputArr.shift());
  let pattern = /@#+(?<productName>[A-Z]([0-9a-zA-Z]){4,}[A-Z])@#+/gm;
  let resultArr = [];
  for (let index = 0; index < numberLength; index++) {
    let currentText = inputArr[index];
    let productMatch = pattern.exec(currentText);

    if (productMatch !== null) {
      while (productMatch !== null) {
        let currentProductName = productMatch.groups.productName;
        resultArr.push(currentProductName);
        productMatch = pattern.exec(currentText);
      }
    } else {
      console.log(`Invalid barcode`);
    }
  }

  // console.log(resultArr);
  // ['FreshFisH', 'Brea0D', 'Che4s6E']
  // ['Val1d1teM', 'ValidIteM', 'ValiditeM']
  let numberRexExp = /(?<nums>\d)/g;


  for (let word of resultArr) {
    let matchesNums = word.match(numberRexExp);
    if(matchesNums == null ){
      console.log(`${word} -> product group: 00`);
    } else {
      console.log(`${word} -> product group: ${matchesNums.join("")}`);
    }

   
  }


}

fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);

console.log(`*************`);

fancyBarcode([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);

// @#+(?<productName>[A-Z]([0-9a-zA-Z]){4,}[A-Z])@#+



// let numsMatches = numberRexExp.exec(word);
//     let currentNums = "";
//     while (numsMatches !== null) {
//       currentNums += numsMatches.groups.nums;
//       resultNumArr.push(currentNums);
//       numsMatches = numberRexExp.exec(word);
//     }