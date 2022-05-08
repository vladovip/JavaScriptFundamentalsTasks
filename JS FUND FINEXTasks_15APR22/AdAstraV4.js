function adAstra(inputArr) {

    let text = inputArr[0];
    let pattern = /(#|\|)(?<ItemName>[A-Za-z\s]+)\1(?<Date>\d{2}\/\d{2}\/\d{2})\1(?<Calories>\d{1,5})\1/g
    let allMatches = pattern.exec(text);
    let totalCalories = 0;
    let foodInfoArr = [];
   
    while( allMatches != null  ){
        let FoodName = allMatches.groups.ItemName;
        let expirationDate = allMatches.groups.Date;
        let currentCalories = allMatches.groups.Calories;
       
        foodInfoArr.push(`Item: ${FoodName}, Best before: ${expirationDate}, Nutrition: ${currentCalories}`)
        totalCalories += Number(currentCalories);
        allMatches = pattern.exec(text);
    }

     let days =  Math.floor (totalCalories /  2000) ;

     if ( days > 0 ){
         console.log(`You have food to last you for: ${days} days!`);
         console.log(foodInfoArr.join("\n"));
      } else {
         console.log(`You have food to last you for: ${days} days!`);
     }

}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);

console.log(`************`);

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);

console.log(`***********`);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);


// (#|\|)(?<ItemName>[A-Za-z\s]+)\1(?<Date>\d+\/\d+\/\d+)\1(?<Calories>\d+)\1

// (#|\|)(?<ItemName>[A-Za-z\s]+)\1(?<Date>\d{2}\/\d{2}\/\d{2})\1(?<Calories>\d{1,5})\1