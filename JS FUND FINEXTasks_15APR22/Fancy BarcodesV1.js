function fancyBarcodes(input) {
    let productCount = +input.shift();
    const pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    while (productCount > 0) {
      let barcode = input.shift(); //Изкарваме един по един отделните баркоди
      let match = pattern.exec(barcode); //Прилагаме им регекса
      if (match != null) {
        let productGroup = ""; //Създаваме празна група
        let product = match.groups.product; //Продуктите са = групата, която имаме създадена в регекса
   
        for (let ch of product) {
          // За всеки отделен символ от баркода
          let isNumber = Number(ch); //Превръщаме ги в числа
          if (isNumber * 1 === isNumber) {
            //Ако умножено по едно не е равно, ще връща NaN
            productGroup += ch; //Долепяме го към стринга
          }
        }
        if (productGroup == "") {
          //Ако групата остане празна, то е равна на 00
          productGroup = "00";
        }
        console.log(`Product group: ${productGroup}`);
      } else {
        console.log("Invalid barcode");
      }
      productCount--;
    }
  }
  // let barcodeCount = +input.shift();
  // let group;
  // let pattern = /@#+(?<item>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
  // let groupPattern = /[0-9]/g;
  // while (barcodeCount) {
  //   let barcode = input.shift();
  //   let items = pattern.exec(barcode);
  //   if (items !== null) {
  //     let [item] = items;
  //     group = item.match(groupPattern);
  //   }else{
  //     console.log("Invalid barcode")
  //   }
  //   if (group !== null) {
  //     console.log(`Product group: ${group.join("")}`);
  //   } else {
  //     console.log("Product group: 00");
  //   }
  //   barcodeCount--;
  // }
  fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
  console.log("~~~~~~");
  fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
  ]);
   