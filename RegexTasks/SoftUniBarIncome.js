function softUniBarIncome (inputArr) {

    let currentProductInfo = inputArr.shift();
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|([\D])*(?<price>\d+(\.\d+)?)\$/g;
    let totalSum = 0;

    while (currentProductInfo !== "end of shift") {
       
    let allMatchArr = pattern.exec(currentProductInfo);
    // console.log(allMatchArr);
     while ( allMatchArr !== null){
        // console.log(allMatchArr);
      let customerName = allMatchArr[1];
      let productName = allMatchArr[2];
      let countProduct = Number(allMatchArr[3]);
      let productPrice = Number(allMatchArr[5]);
      let totalpricePerProduct = countProduct * productPrice;
      totalSum += Number(totalpricePerProduct);
      console.log(`${customerName}: ${productName} - ${totalpricePerProduct.toFixed(2)}`);

      allMatchArr = pattern.exec(currentProductInfo);
    }

    currentProductInfo = inputArr.shift();
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);

}



softUniBarIncome (['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);


console.log(`*********`);


softUniBarIncome (['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
);



// %(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|([^\d])*(?<price>\d+(\.\d+)?)\$ 

// %(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|([\D])*(?<price>\d+(\.\d+)?)\$