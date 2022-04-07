function adAstra(input) {
 
    let text = input[0];
    let foodInfo = [];
    let pattern = /([|#])([a-zA-Z\s]+)\1([0-9]{2}\/[0-9]{2}\/[0-9]{2})\1([0-9]{1,5})\1/g;
 
    let totalFoodCalories = 0;
    let match = pattern.exec(text);
 
    while (match != null) {
        let type = match[2];
        let expirationDate = match[3];
        let calories = Number(match[4]);
        totalFoodCalories += calories;
 
        foodInfo.push({
            type,
            expirationDate,
            calories
        });
        match = pattern.exec(text);
    }
 
    console.log(`You have food to last you for: ${Math.floor(totalFoodCalories / 2000)} days!`);
 
    for (let item of foodInfo) {
        console.log(`Item: ${item.type}, Best before: ${item.expirationDate}, Nutrition: ${item.calories}`);
    }
}