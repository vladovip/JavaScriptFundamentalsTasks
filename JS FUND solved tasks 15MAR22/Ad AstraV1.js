function adAstra(input) {
    let total = 0;
    let result = [];
    let pattern =
      /(\#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(-?\d+(?:\.\d+)?)\1/g;
    let text = input[0];
    let match = pattern.exec(text);
    while (match != null) {
      let itemName = match[2];
      let date = match[3];
      let calories = match[4];
      total += +calories;
      result.push(`Item: ${itemName}, Best before: ${date}, Nutrition: ${calories}`);
      match = pattern.exec(text);    
    }
   
  console.log(`You have food to last you for: ${Math.floor(total / 2000)} days!`);
  console.log(result.join("\n"));
  }
  adAstra([
    "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
  ]);
  console.log("~~~~~~");
  adAstra([
    "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
  ]);
   