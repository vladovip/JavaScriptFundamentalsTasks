function adAstra(input) {
  let text = input[0];

  let allLineRegExp = /[#|][A-Z\sa-z]+[#|]\d\d\/\d\d\/\d\d[#|]\d{1,5}[#|]/g;

  //  let validlineContains = allLineRegExp.test(text);
  //  console.log(validlineContains);
  let matchesArr = text.match(allLineRegExp);
  // console.log(matchesArr);
  let totalcallories = 0;
  let ListOfProduts = [];

  for (let foodLines of matchesArr) {
    let splitingOperatorRegExp = /[#|]/g;
    tokens = foodLines.split(splitingOperatorRegExp);

    let foodItem = tokens[1];
    let expireDate = tokens[2];
    let foodkCal = Number(tokens[3]);
    totalcallories += foodkCal;

      let eachFoodItem = {
        foodItem,
        expireDate,
        foodkCal,
      };
      ListOfProduts.push(eachFoodItem);
    
  }

  let foodDays = Math.floor(totalcallories / 2000);
  
  if ( foodDays >= 1 ){
    console.log(`You have food to last you for: ${foodDays} days!`);
    for (let itemLine of ListOfProduts) {
      console.log(
        `Item: ${itemLine.foodItem}, Best before: ${itemLine.expireDate}, Nutrition: ${itemLine.foodkCal}`
      );
    }
  } else {
    console.log(`Not enough food even for 1 day!`);
  }
    
}



adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);

console.log(`----------`);

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);


// You must extract the information about the food and calculate the total calories.
//#{item name}#{expiration date}#{calories}#  OR
// |{item name}|{expiration date}|{calories}|

// Calculate the total calories of all food items and
// then determine how many days you can last with the food you have.
//Keep in mind that you need 2000kcal a day.

// [#|][A-Za-z]+[#|]\d\d\/\d\d\/\d\d[#|]\d+[#|]    all Food Item Line Info
// [#|][A-Z\sa-z]+[#|]\d\d\/\d\d\/\d\d[#|]\d+[#|] - second option all fodd Line Ifno

// [#|][A-Z\sa-z]+[#|]\d\d\/\d\d\/\d\d[#|]\d{1,5}[#|] - third option